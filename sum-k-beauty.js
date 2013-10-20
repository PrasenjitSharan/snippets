var input = [0, 1, 2, 2, 3, 4, 5, 5, 6],
    k = 6,
    i,
    l = input.length,
    hash = {};

for (i = 0; i < l; i += 1) {
    hash[input[i]] = i;
}

for (i = 0; i < l; i += 1) {
    if (hash[k - input[i]] != i) {
        document.write(i + ", " + hash[k - input[i]] + "<br>");
    }
}