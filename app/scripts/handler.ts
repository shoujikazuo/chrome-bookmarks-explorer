// import { driver } from './model/maindriver.js';
import { FlattenBookmarkURLs } from './bookmarks/flatten';
import { TextExtractorFinder } from './text-extractor/finder';

function onFindButtonClick(e: MouseEvent) {
    console.log(`call hirasawa`);
    chrome.bookmarks.getTree(bookmarkNodes => {
        const urls = new FlattenBookmarkURLs(bookmarkNodes);
        console.log(urls.getURLs());

        urls.getURLs().forEach( url => {
            const request = new XMLHttpRequest();
            request.open("GET", url.toString(), true); //同期
            //htmlならdocument, pdfならblobとかarraybuffer
            //→どうやって分ければいいの?
            //→とりあえずいったんレスポンスを受ける
            request.onreadystatechange = function() {
                if(request.readyState == 4 && request.status == 200) {
                    // console.log(`${}`);
                    console.log(`res = ${request.getAllResponseHeaders()}`); //とりあえず何かは出る．
                    // ↓ 何も出ない．事前にresponseTypeを明示的に指定してないから?
                    // console.log(`res type = ${request.responseType}`); 
                }
            }
            request.send();
        })
        // const extractor = TextExtractorFinder.find();
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const tFindButton: HTMLElement | null = document.getElementById('findBtn');

    if(!!tFindButton) {
        tFindButton.addEventListener('click', onFindButtonClick);
    } else {
        console.log(`Find button is not exist. ${tFindButton}`)
    }
});