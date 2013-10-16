// Delete a substring from a string
function delSubStr(str, sub) {
    var i = str.indexOf(sub);
    if (i === -1) {} else {
        str = str.substring(0, i) + str.substring((i + sub.length), str.length);
    }
    alert(str);
}

delSubStr('abcdef', 'ef');