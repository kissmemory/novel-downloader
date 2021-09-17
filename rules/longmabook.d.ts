import { Book, attachmentClass } from "../main";
import { BaseRuleClass } from "../rules";
export declare class longmabook extends BaseRuleClass {
    constructor();
    bookParse(): Promise<Book>;
    chapterParse(chapterUrl: string, chapterName: string | null, isVIP: boolean, isPaid: boolean, charset: string, options: object): Promise<{
        chapterName: string | null;
        contentRaw: null;
        contentText: null;
        contentHTML: null;
        contentImages: null;
        additionalMetadate: null;
    } | {
        chapterName: string | null;
        contentRaw: HTMLDivElement;
        contentText: string;
        contentHTML: HTMLDivElement;
        contentImages: attachmentClass[];
        additionalMetadate: null;
    }>;
}
