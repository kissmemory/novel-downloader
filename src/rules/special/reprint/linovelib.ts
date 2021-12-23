import { getImageAttachment } from "../../../lib/attachments";
import { getHtmlDOM } from "../../../lib/http";
import { rm } from "../../../lib/misc";
import { introDomHandle, nextPageParse } from "../../../lib/rule";
import { log } from "../../../log";
import { Book, BookAdditionalMetadate, Chapter, Status } from "../../../main";
import { BaseRuleClass } from "../../../rules";

export class Linovelib extends BaseRuleClass {
  public constructor() {
    super();
    this.imageMode = "TM";
  }

  public async bookParse() {
    const bookUrl = document.location.href.replace(/\/catalog$/, ".html");
    const bookname = (
      document.querySelector(".book-meta > h1") as HTMLElement
    ).innerText.trim();

    const author = (
      document.querySelector(
        ".book-meta > p:nth-child(2) > span:nth-child(1) > a:nth-child(2)"
      ) as HTMLElement
    ).innerText.trim();

    const doc = await getHtmlDOM(bookUrl, undefined);
    const introDom = doc.querySelector(".book-dec > p:nth-child(1)");
    const [introduction, introductionHTML] = await introDomHandle(introDom);

    const additionalMetadate: BookAdditionalMetadate = {};
    const coverUrl = (doc.querySelector(".book-img > img") as HTMLImageElement)
      .src;
    if (coverUrl) {
      getImageAttachment(coverUrl, this.imageMode, "cover-")
        .then((coverClass) => {
          additionalMetadate.cover = coverClass;
        })
        .catch((error) => log.error(error));
    }

    additionalMetadate.tags = Array.from(
      doc.querySelectorAll(".book-label a")
    ).map((a) => (a as HTMLAnchorElement).innerText.trim());

    const chapters: Chapter[] = [];

    const chapterList = document.querySelector(".chapter-list");
    if (!chapterList) {
      throw new Error("获取章节失败！");
    }
    const liList = chapterList.children;
    let chapterNumber = 0;
    let sectionNumber = 0;
    let sectionName = null;
    let sectionChapterNumber = 0;
    for (const node of Array.from(liList)) {
      const nodeNmae = node.nodeName.toLowerCase();
      if (nodeNmae === "div") {
        sectionNumber++;
        sectionChapterNumber = 0;
        sectionName = (node as HTMLDivElement).innerText.trim();
      } else if (nodeNmae === "li") {
        chapterNumber++;
        sectionChapterNumber++;
        const a = node.firstElementChild as HTMLAnchorElement;
        const isVIP = false;
        const chapterName = a.innerText.trim();
        const chapterUrl = a.href;
        const chapter = new Chapter(
          bookUrl,
          bookname,
          chapterUrl,
          chapterNumber,
          chapterName,
          isVIP,
          null,
          sectionName,
          sectionNumber,
          sectionChapterNumber,
          this.chapterParse,
          "UTF-8",
          {}
        );
        if (chapterUrl.startsWith("javascript")) {
          chapter.status = Status.aborted;
        }
        chapters.push(chapter);
      }
    }

    const book = new Book(
      bookUrl,
      bookname,
      author,
      introduction,
      introductionHTML,
      additionalMetadate,
      chapters
    );
    return book;
  }

  public async chapterParse(
    chapterUrl: string,
    chapterName: string | null,
    isVIP: boolean,
    isPaid: boolean,
    charset: string,
    options: object
  ) {
    return nextPageParse({
      chapterName,
      chapterUrl,
      charset,
      selector: "#TextContent",
      contentPatch: (_content, doc) => {
        const ss = Array.from(doc.querySelectorAll("script")).find((s) =>
          s.innerHTML.includes('document.getElementById("chapter_last")')
        );
        if (ss) {
          const _domNr = ss.innerText.trim().match(/let dom_nr = '(.+)';/);
          if (_domNr) {
            const domNr = _domNr[1];
            (doc.getElementById("chapter_last") as HTMLSpanElement).innerHTML =
              domNr;
          }
        }

        rm(".tp", true, _content);
        rm(".bd", true, _content);
        return _content;
      },
      getNextPage: (doc) =>
        (doc.querySelector(".mlfy_page > a:nth-child(5)") as HTMLAnchorElement)
          .href,
      continueCondition: (_content, nextLink) =>
        new URL(nextLink).pathname.includes("_"),
    });
  }
}