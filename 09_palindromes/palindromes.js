const palindromes = function (string) {
    const regex = /[ ,!.]/g;
    const charArr = string.replaceAll(regex, '').toLowerCase().split("")
    //console.log(charArr);
    for (let i = 0; i < charArr.length/2 - 1; i++) {
        const element = charArr[i];
        if(element !== charArr[charArr.length-1-i]) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
