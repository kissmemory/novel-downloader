import {
  BookAdditionalMetadate,
  attachmentClass,
  Chapter,
  Status,
} from "../main";
import { getHtmlDOM, ggetHtmlDOM, cleanDOM } from "../lib";
import { ruleClass, chapterParseObject } from "../rules";
import { introDomHandle } from "./lib/common";

export class zongheng implements ruleClass {
  public imageMode: "naive" | "TM";
  public concurrencyLimit: number;

  public constructor() {
    this.imageMode = "TM";
    this.concurrencyLimit = 5;
  }

  public async bookParse(chapterParse: ruleClass["chapterParse"]) {
    const bookUrl = document.location.href.replace("/showchapter/", "/book/");
    const bookname = (<HTMLElement>(
      document.querySelector("div.book-meta > h1")
    )).innerText.trim();

    const author = (<HTMLElement>(
      document.querySelector("div.book-meta > p > span:nth-child(1) > a")
    )).innerText.trim();

    const doc = await getHtmlDOM(bookUrl, undefined);
    const introDom = doc.querySelector("div.book-info > div.book-dec");
    const [introduction, introductionHTML, introCleanimages] = introDomHandle(
      introDom
    );

    const additionalMetadate: BookAdditionalMetadate = {};
    let coverUrl = (<HTMLImageElement>doc.querySelector("div.book-img > img"))
      .src;
    additionalMetadate.cover = new attachmentClass(
      coverUrl,
      `cover.${coverUrl.split(".").slice(-1)[0]}`,
      "TM"
    );
    additionalMetadate.cover.init();
    additionalMetadate.tags = Array.from(
      doc.querySelectorAll(".book-info>.book-label a")
    ).map((a) => (<HTMLAnchorElement>a).innerText.trim());

    const chapters: Chapter[] = [];
    const sections = document.querySelectorAll(".volume-list");
    let chapterNumber = 0;
    for (let i = 0; i < sections.length; i++) {
      const s = sections[i];
      const sectionNumber = i + 1;

      const sectionLabel = s.querySelector("div.volume");
      Array.from((<HTMLElement>sectionLabel).children).forEach((ele) =>
        ele.remove()
      );

      const sectionName = (<HTMLElement>sectionLabel).innerText.trim();
      let sectionChapterNumber = 0;

      const cs = s.querySelectorAll("ul.chapter-list > li");
      for (let j = 0; j < cs.length; j++) {
        const c = cs[j];
        const a = c.querySelector("a");
        chapterNumber++;
        sectionChapterNumber++;
        const chapterName = (<HTMLAnchorElement>a).innerText.trim();
        const chapterUrl = (<HTMLAnchorElement>a).href;

        const isVIP = () => {
          if (c.className.includes("vip")) {
            return true;
          } else {
            return false;
          }
        };
        const isPaid = () => {
          //Todo
          return false;
        };

        const chapter = new Chapter(
          bookUrl,
          bookname,
          chapterUrl,
          chapterNumber,
          chapterName,
          isVIP(),
          isPaid(),
          sectionName,
          sectionNumber,
          sectionChapterNumber,
          chapterParse,
          "UTF-8",
          {}
        );
        const isLogin = () => {
          //Todo
          return false;
        };
        if (isVIP() && !(isLogin() && chapter.isPaid)) {
          chapter.status = Status.aborted;
        }
        chapters.push(chapter);
      }
    }

    return {
      bookUrl: bookUrl,
      bookname: bookname,
      author: author,
      introduction: introduction,
      introductionHTML: introductionHTML,
      additionalMetadate: additionalMetadate,
      chapters: chapters,
    };
  }

  public async chapterParse(
    chapterUrl: string,
    chapterName: string | null,
    isVIP: boolean,
    isPaid: boolean,
    charset: string,
    options: object
  ) {
    async function publicChapter(): Promise<chapterParseObject> {
      const dom = await ggetHtmlDOM(chapterUrl, charset);
      const chapterName = (<HTMLElement>(
        dom.querySelector("div.title_txtbox")
      )).innerText.trim();
      const content = <HTMLElement>dom.querySelector("div.content");
      if (content) {
        let { dom, text, images } = cleanDOM(content, "TM");
        return {
          chapterName: chapterName,
          contentRaw: content,
          contentText: text,
          contentHTML: dom,
          contentImages: images,
          additionalMetadate: null,
        };
      } else {
        return {
          chapterName: chapterName,
          contentRaw: null,
          contentText: null,
          contentHTML: null,
          contentImages: null,
          additionalMetadate: null,
        };
      }
    }

    async function vipChapter(): Promise<chapterParseObject> {
      //Todo
      return {
        chapterName: chapterName,
        contentRaw: null,
        contentText: null,
        contentHTML: null,
        contentImages: null,
        additionalMetadate: null,
      };
    }

    if (isVIP) {
      return vipChapter();
    } else {
      return publicChapter();
    }
  }
}