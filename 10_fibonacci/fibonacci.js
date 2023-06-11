const fibonacci = function(n) {
    let num = parseInt(n);
    if(num < 1 || num == NaN) return 'OOPS';
    if(num === 1 || num === 2) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
};

// Do not edit below this line
module.exports = fibonacci;
