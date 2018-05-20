import { BookmarkURLs } from './bookmarks';

export class FlattenBookmarkURLs implements BookmarkURLs {
    private mURLs: URL[];

    constructor(aNodes: chrome.bookmarks.BookmarkTreeNode[]) {
        const traverseArray = function(aArray: chrome.bookmarks.BookmarkTreeNode[], aURLs: URL[]): URL[] {
            aArray.map(aNode => {
                if(aNode.children == undefined) {
                    let tURLstr = aNode.url == undefined? "": aNode.url;
                    aURLs.push(new URL(tURLstr));
                } else {
                    if(aNode.url != undefined) {
                        aURLs.push(new URL(aNode.url));
                    }
                    traverseArray(aNode.children, aURLs);
                }
            });
            return aURLs;
        }
        this.mURLs = traverseArray(aNodes, new Array<URL>());
    }

    getURLs(): URL[] {
        return this.mURLs;
    }
}