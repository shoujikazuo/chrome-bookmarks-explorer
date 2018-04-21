// var SimpleFlattenBookmarks = require('./model/bookmarks/bookmarks').SimpleFlattenBookmarks
import { FlattenBookmarks } from './bookmarks/bookmarks.js'

class MainDriver {
    constructor(){}

    main() {
        chrome.bookmarks.getTree(function(bookmarksArray /* array of BookmarkTreeNode */) {
            var bookmarks = new FlattenBookmarks(bookmarksArray);
            var urls = bookmarks.getURLs();
            console.log(urls);
        });
    }
}

export var driver = new MainDriver();