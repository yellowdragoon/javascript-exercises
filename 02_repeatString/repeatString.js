const repeatString = function(string, num) {
    if(num < 0) return 'ERROR';

    stringBuilder = '';
    for (let index = 0; index < num; index++) {
        stringBuilder += string;
    }
    return stringBuilder;
};

// Do not edit below this line
module.exports = repeatString;
