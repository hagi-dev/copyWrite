
/**
 * function to check if text is palindrome, return a boolean
 * 
 * @param {string} text to check
 * @returns {boolean} 
 */

checkPalindrome = (text)=>{
    let isPalindrome=true;
    let countLetter = text.length;
    let initial=0;
    let end=countLetter-1;
    while(initial<countLetter){
        if(text[initial]==text[end]){
            initial++;
            end--;
        }else{
            isPalindrome=false;
            break;
        } 
    }
    return isPalindrome;
}

module.exports = checkPalindrome;
