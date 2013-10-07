var data = ['apple', 'apricot', 'banana', 'berry'];

var textBox = document.getElementById("text-input");
//var input = textBox.value;
textBox.addEventListener("blur", function () {
    autocomplete(textBox, data);
}, false);

// takes a text field and an array of strings for autocompletion
function autocomplete(input, data) {
    if (input.value.length == input.selectionStart && input.value.length == input.selectionEnd) {
        var candidates = [];
        // filter data to find only strings that start with existing value
        for (var i = 0; i < data.length; i++) {
            if (data[i].indexOf(input.value) === 0 && data[i].length > input.value.length) candidates.push(data[i]);
        }

        if (candidates.length > 0) {
            // some candidates for autocompletion are found
            if (candidates.length == 1) input.value = candidates[0];
            else input.value = longestInCommon(candidates, input.value.length);
            return true;
        }
    }
    return false;
}

// finds the longest common substring in the given data set. Takes an array of strings and a starting index
function longestInCommon(candidates, index) {
    var i, ch, memo;
    do {
        memo = null;
        for (i = 0; i < candidates.length; i++) {
            ch = candidates[i].charAt(index);
            if (!ch) break;
            if (!memo) memo = ch;
            else if (ch != memo) break;
        }
    } while (i == candidates.length && ++index);

    return candidates[0].slice(0, index);
}

// HTML
// <input type="text" id="text-input" />

// Source: http://stackoverflow.com/questions/1837555/ajax-autocomplete-or-autosuggest-with-tab-completion-autofill-similar-to-shell/1897480#1897480