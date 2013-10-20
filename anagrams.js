var input = "buddy,pan,nap,toot,toto,anestri,asterin,eranist,nastier,ratines,resiant,restain,retains,retinas,retsina,sainter,stainer,starnie,stearin";
var words = input.split(","),
    word = "",
    nextWord = "",
    sortedWord = "",
    sortedNextWord = "";

for (var i = 0; i < words.length; i += 1) {
    word = words[i];
    sortedWord = word.split("").sort().join("");
    for (var j = (i + 1); j < words.length; j += 1) {
        nextWord = words[j];
        sortedNextWord = nextWord.split("").sort().join("");
        if (sortedNextWord === sortedWord) {
            document.write(word + " - " + nextWord + "( " + i + ", " + j + " )<br>");
        }
    }
}