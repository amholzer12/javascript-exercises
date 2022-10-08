const reverseString = function(pants) {
    wordArray = Array.from(pants)
    let answer = ""
    for (i = 0; i < pants.length; i++) {
        const letter = wordArray.pop()
        answer += letter
}
    return answer
};



// Do not edit below this line
module.exports = reverseString;
