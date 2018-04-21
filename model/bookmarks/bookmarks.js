import { toFlatten } from '../../utils/array/to-flatten.js'

export class FlattenBookmarks {
    constructor(aNodes) {
        this.getURLs = function() {
            if(!(aNodes instanceof Array) || aNodes.length <= 0) {
                return "";
            }
            var traverseArray = function(aArray) {
                return aArray.map(function(aElem) {
                    if(typeof aElem.children == "undefined") {
                        return typeof aElem.url == "undefined" ? "" : aElem.url
                    } else {
                        return traverseArray(aElem.children)
                    }
                }).filter(url => url != "")
            }
            return toFlatten(traverseArray(aNodes));
        }
    }
    withNodes(aNodes) {
        return new FlattenBookmarks(aNodes);
    }
};