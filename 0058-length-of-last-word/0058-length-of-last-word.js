/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s.trim();
    let stringArray = s.trim().split(' ');
    stringArray.reverse();
    let lastWord = stringArray[0];
    return lastWord.length;
};