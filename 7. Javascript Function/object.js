//JavaScript Recursive Functions
function factorial(n) {
    if (n == 0) {
        return 1;
    }
    return factorial(n - 1) * n;
}
console.log(factorial(5));
console.log(factorial(12));




function traverse(node) {
    traverseNode(node, '');
    function traverseNode(node, spacing) {
        spacing = spacing || '  ';
        console.log(spacing + node.nodeName);
        for (var i = 0, len = node.childNodes.length; i < len; i += 1) {
            var child = node.childNodes[i];
            if (child.nodeType === document.ELEMENT_NODE) {
                traverseNode(child, spacing + '  ');
            }
        }
        console.log(spacing + '/' + node.nodeName);
    }
}

traverse(window);
