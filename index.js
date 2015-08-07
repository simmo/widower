'use strict';

module.exports = function widowKiller(elements) {
    var nodes = document.querySelectorAll(elements);

    function removeWidow(element) {
        var walk = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false);
        var node, arr;

        while(node = walk.nextNode()) {
            arr = node.nodeValue.split(' ');
            arr.push(arr.splice(-2, 2).join('\u00A0'));
            node.nodeValue = arr.join(' ');
        }
    }

    for (var i = nodes.length - 1; i >= 0; i--) {
        removeWidow(nodes[i]);
    }
};
