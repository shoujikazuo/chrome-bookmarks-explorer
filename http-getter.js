
// TODOメモ
//   request.responseText を headless chrome なり selenium なりに読ませる
//   -> テキスト全選択して持ってくる
//   -> それを検索かける
var fetchURL = function(url, keyword) {
    var request = new XMLHttpRequest();
    request.onload = function() {
        console.log({
            url : url,
            statusCode : request.status,
            text : request.responseText
        })
    }
    request.open("GET", url, true);
    request.send();
}