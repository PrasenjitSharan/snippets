var input = [0, 1, 2, 2, 3, 9, 5, 7, 5, 6];
var max = 0,
    secondMax = 0;
for (var i = 0; i < input.length; i += 1) {
    if (input[i] > max) {
        max = input[i];
    }
    if (input[i] < max && input[i] > secondMax) {
        secondMax = input[i];
    }
}
alert(secondMax);