function showCase(value) {
    switch (value) {
        case "A":
            alert("A");
            break;
        case "B":
            alert("B");
            break;
        case "C":
            alert("C");
            break;
        default:
            alert("Unknown");
    }
}

showCase(new String("B"));