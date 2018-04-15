
// getしてfindするのをひとまとめにする→それを並列実行
var fetchURL = function(url, keyword) {
    var request = new XMLHttpRequest();
    request.onload = function() {
        console.log({
            url : url,
            statusCode : request.status,
            text : request.responseText //TODO これ，ちゃんとレンダリングしてテキスト持ってきてやらないとダメじゃね
        })
    }
    request.open("GET", url, true);
    request.send();
}