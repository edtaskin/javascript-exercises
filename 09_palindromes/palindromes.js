const palindromes = function (str) {
    let i = 0, j = str.length - 1;
    while (i < j) {
        while (str[i] === " " || !isAlphaNum(str[i])) i++;
        while (str[j] === " " || !isAlphaNum(str[j])) j--;
        if (str[i].toLowerCase() !== str[j].toLowerCase())
            return false;
        i++;
        j--;
    }
    return true;
};

const isAlphaNum = (c) => {
    if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')) return true;
    if (!isNaN(c)) return true;
    return false;
}

palindromes('A car, a man, a maraca.');

// Do not edit below this line
module.exports = palindromes;
