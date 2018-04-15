// import ""

var bookmarks = new SimpleFlattenBookmarks();

function clickHandler(e) {
    chrome.bookmarks.getTree(function(bookmarksArray /* array of BookmarkTreeNode */) {
        bookmarks = bookmarks.withNodes(bookmarksArray);
        var urls = bookmarks.getURLs();
        fetchURL(urls[0], "");
    });
    // var mainProcess = function() {
    //     return new Promise(function(resolve) {

    //     });
    // };
}

document.addEventListener('DOMContentLoaded', function() {
    /**
     * 以下のエラー抑止のために，document.getElementByid(...).addEventListener(...)する必要がある．
     * *.htmlの中で onclick="..."はできない．以下のエラーが出る．
     * """"
     * Refused to execute inline event handler 
     * because it violates the following Content Security Policy directive:
     *  "script-src 'self'". Either the 'unsafe-inline' keyword, a hash ('sha256-...'), 
     * or a nonce ('nonce-...') is required to enable inline execution.
     * """"
     */
    document.getElementById('findBtn').addEventListener('click', clickHandler);
});