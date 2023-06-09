const reverseString = function(string) {
    reversed = '';
    for (let index = string.length-1; index >= 0; index--) {
        reversed += string.charAt(index);
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
