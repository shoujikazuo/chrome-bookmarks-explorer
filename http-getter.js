
// getしてfindするのをひとまとめにする→それを並列実行
var fetchURL = function(url, keyword) {
    var request = new XMLHttpRequest();
    request.onload = function() {
        console.log({
            url : url,
            statusCode : request.status,
            text : request.responseText
        })
    }
    /**
     * ばっかみたいにエラー出る
     * http-getter.js:12 [Deprecation] Synchronous XMLHttpRequest on the main thread is deprecated 
     * because of its detrimental effects to the end user's experience. 
     * For more help, check https://xhr.spec.whatwg.org/.
     * fetchURL @ http-getter.js:12
     * 
     * http-getter.js:13 Failed to load https://twitter.com/: 
     * No 'Access-Control-Allow-Origin' header is present on the requested resource. 
     * Origin 'chrome-extension://oemplhijmedffkpkngmbboainnpljfgp' is therefore not allowed access.
     * fetchURL @ http-getter.js:13
     * 
     * popup.html:1 Error in response to bookmarks.getTree:
     * NetworkError: Failed to execute 'send' on 'XMLHttpRequest':
     * Failed to load 'https://twitter.com/'.
     * at fetchURL (chrome-extension://oemplhijmedffkpkngmbboainnpljfgp/http-getter.js:13:13)
     * at Object.callback (chrome-extension://oemplhijmedffkpkngmbboainnpljfgp/handler.js:9:9)
     * at HTMLInputElement.clickHandler 
     * (chrome-extension://oemplhijmedffkpkngmbboainnpljfgp/handler.js:6:22)
     */
    request.open("GET", url, false);
    request.send();
}