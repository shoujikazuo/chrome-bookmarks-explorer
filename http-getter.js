
// TODOメモ
//   request.responseText を headless chrome なり selenium なりに読ませる
//   -> テキスト全選択して持ってくる
//   -> それを検索かける
var fetchURL = function(url, handler) {
    var request = new XMLHttpRequest();
    request.onload = handler;
    request.open("GET", url, true);
    request.send();
}