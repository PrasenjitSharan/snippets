(function () {
    var values = [7, 4, '13', Infinity, -9];
    for (var i = 0; i < values.length; i += 1) {
        if (isOdd(values[i])) {
            alert(values[i]);
        }
    }
})();

function isOdd(num) {
    return num % 2 == 0;
}