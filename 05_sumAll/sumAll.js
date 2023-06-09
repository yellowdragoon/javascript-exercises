const sumAll = function(start, end) {
    sum = 0;

    larger = Math.max(start, end);
    smaller = Math.min(start, end);

    if(start < 0 || end < 0) return 'ERROR';

    if(typeof start !== 'number' || typeof end !== 'number'){
        return 'ERROR';
    }

    while(smaller <= larger){
        sum += smaller++;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
