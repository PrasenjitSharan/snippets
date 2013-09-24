var zipCodes = new Array("93021",
    "02392",
    "20341",
    "08163",
    "32959");
for (var i = 0; i < zipCodes.length; i += 1) {
    if (!isNaN(parseInt(zipCodes[i], 10)) && parseInt(zipCodes[i], 10) > 0) {
        alert(parseInt(zipCodes[i], 10));
    }
}