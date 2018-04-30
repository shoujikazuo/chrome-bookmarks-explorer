// var SimpleFlattenBookmarks = require("./model/bookmarks/bookmarks").SimpleFlattenBookmarks
import { FlattenBookmarkStore } from "./bookmarks/flatten.js"
import { NoCacheHttpResponseStore } from "./http-response/no-cache.js"
import { asyncMap } from "../utils/array/arrayutils.js"

class MainDriver {
    constructor(){}

    main() {
        chrome.bookmarks.getTree(function(bookmarksArray /* array of BookmarkTreeNode */) {
            const bookmarkStore = new FlattenBookmarkStore(bookmarksArray);
            const urls = bookmarkStore.getURLs();
            // urlをばらして並列に get content → find
            asyncMap(urls, async url => {
                // get content → findへ
                const httpResponseStore = new NoCacheHttpResponseStore();
                const response = httpResponseStore.get(url).then( response => {
                    // console.log(response.getText());
                    if(response.getState() == 4 && response.getStatusCode() == 200) {
                        // ヘッダ見てデコーダ分ける
                        // html, pdfくらいか
                    }
                }, err => {
                    //TODO 適切なエラー処理?
                });
                // console.log(`response = ${response}`);
            });
            // findの結果が確定したものから rendering queue に放り込む
        });
    }
}

export const driver = new MainDriver();