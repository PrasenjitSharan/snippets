// Delete a substring from a string
function replaceSubStr(str, o, n) {
    var i = str.indexOf(o);
    if (i === -1) {} else {
        str = str.substring(0, i) + n + str.substring((i + o.length), str.length);
    }
    alert(str);
}

replaceSubStr('abcdef', 'cd', 'xy');