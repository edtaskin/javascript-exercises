const sumAll = function(n1, n2) {
    console.log(typeof n1);
    console.log(typeof n2);
    if (typeof n1 != 'number' || typeof n2 != 'number') return "ERROR";
    if (n1 < 0 || n2 < 0) return "ERROR";
    let end = n1 > n2 ? n1 : n2;
    let start = n1 === end ? n2 : n1;
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
