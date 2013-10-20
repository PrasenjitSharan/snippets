// the input array needs to be sorted
var input = [0, 1, 2, 2, 3, 4, 5, 5, 6],
    k = 6,
    i,
    l = input.length,
    sum;

for (i = 0, j = (l - 1); i < l, j > 0; i += 1, j -= 1) {
    sum = input[i] + input[j];
    if (sum > k) {
        j -= 1;
        continue;
    } else if (sum < k) {
        i += 1;
        continue;
    } else {
        document.write(i + ", " + j + '<br>');
    }
}