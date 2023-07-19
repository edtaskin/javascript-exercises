const reverseString = function(str) {
    let strSplitted = str.split("");
    let res = "";
    for (let i = strSplitted.length - 1; i >= 0; i--)
        res += strSplitted[i];
    return res;
};

// Do not edit below this line
module.exports = reverseString;
