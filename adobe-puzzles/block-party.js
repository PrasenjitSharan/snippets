var name = "World!";

(function () {
    if (typeof name === "undefined") {
        var name = "Mr. Bond";
        alert("Goodbye, " + name);
    } else {
        alert("Hello, " + name);
    }
})();