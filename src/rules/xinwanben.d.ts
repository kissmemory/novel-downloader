import { BookAdditionalMetadate, attachmentClass, Chapter } from "../main";
import { ruleClass } from "../rules";
export declare class xinwanben implements ruleClass {
    imageMode: "naive" | "TM";
    charset: string;
    constructor();
    bookParse(chapterParse: ruleClass["chapterParse"]): Promise<{
        bookUrl: string;
        bookname: string;
        author: string;
        introduction: string | null;
        introductionHTML: HTMLElement | null;
        additionalMetadate: BookAdditionalMetadate;
        chapters: Chapter[];
    }>;
    chapterParse(chapterUrl: string, chapterName: string | null, isVIP: boolean, isPaid: boolean, charset: string): Promise<{
        chapterName: string | null;
        contentRaw: HTMLDivElement;
        contentText: string;
        contentHTML: HTMLElement;
        contentImages: attachmentClass[];
    }>;
}
