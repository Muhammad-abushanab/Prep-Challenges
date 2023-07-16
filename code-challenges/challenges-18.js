'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//

const wordLength = (str) => {
    // write your code here
    const words = str.split(" ");
    const middleIndex = Math.floor(words.length / 2);
    const middleWord = words[middleIndex];
    return middleWord.length;
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {
    // write your code here
    let chars1 = {}, chars2 = {};
    for (const char of str1) {
        if (chars1.hasOwnProperty(char)) {
            chars1[char] += 1;
        } else {
            chars1[char] = 1;
        }
    }
    for (const char of str2) {
        if (chars2.hasOwnProperty(char)) {
            chars2[char] += 1;
        } else {
            chars2[char] = 1;
        }
    }
    if (Object.keys(chars1).length !== Object.keys(chars2).length) {
        return false; 
    }

    for (const prop in chars1) {
        if (chars1[prop] !== chars2[prop]) {
            return false; 
        }
    }

    return true;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

const targetIndex = (arr, int) => {
    // write your code here
}
// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };