function getLetter(s) {
    let letter;
    var alpha = s.charAt(0);
    // Write your code here
    switch (alpha) {
        case 'a': case 'e': case 'i': case 'o': case 'u': letter = 'A'; break;
        case 'b': case 'c': case 'd': case 'f': case 'g': letter = 'B'; break;
        case 'h': case 'j': case 'k': case 'l': case 'm': letter = 'C'; break;
        case 'n': case 'p': case 'q': case 'r': case 's': case 't': case 'v':
        case 'w': case 'x': case 'y': case 'z': letter = 'D'; break;
    }
    return letter;
}

