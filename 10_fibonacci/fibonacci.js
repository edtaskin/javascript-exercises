const fibonacci = function(n) {
    n = Number(n);
    if (n < 0) return "OOPS";
    let prev = 1;
    let prevPrev = 0;
    let fib = 1;
    for (let i = 1; i < n; i++) {
        fib = prev + prevPrev;
        prevPrev = prev;
        prev = fib;
    }
    return fib;
};


// Do not edit below this line
module.exports = fibonacci;
