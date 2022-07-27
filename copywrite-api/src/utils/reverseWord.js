
/**
 * function to reverse the letters of a word
 * @param {string} text to check
 * @returns {string} text reverse
 */

const reverseWord = (text) =>{
    let resText = "";
    for (let letter of text) {
      resText = letter + resText;
    }
    return resText;
}

module.exports = reverseWord;