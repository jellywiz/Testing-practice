function reverseString(str) {
    let reversedString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
    if (reversedString !== str.split('').reverse().join('')) {
        throw new Error('The string is not a Reversed!');
    } else {
        return reversedString;
    }
}

module.exports = reverseString;