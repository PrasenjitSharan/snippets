// Find the indices wchich add up k in an array
var a = [4, 2, 5, 1, 6, 0, 8, 0, 2],
    k = 6,
    x = 0,
    r = {};

for (var i = 0; i < a.length; i += 1) {
    for (var j = (i + 1); j < a.length; j += 1) {
        sum = a[i] + a[j];
        if (sum == k) {
            r[x++] = i + ":" + j;
        }
    }
}
alert(JSON.stringify(r));