// Delete a char from a string
function delChar(str, c) {
    var i = str.indexOf(c);
    if (i === -1) return str;
    else {
        newStr = str.substring(0, i) + str.substring(i + 1, str.length);
        return newStr;
    }
}
alert(delChar('abcde', 'e'));