/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let newArray = []
    s.split(' ').forEach((word)=>newArray.push(word.split('').reverse().join('')));
    return newArray.join(' ');
};