// Find palindrome
// palindrome('abba') === true
// palindrome('dhfsfdsfhdfh') === false

/*
1. reverse the string
2. check with original if they are same
*/

const Palindrome = (str) => {
    const isPalindrome = str.split('').reverse().join('');
    console.log(str === isPalindrome);
}

Palindrome('hannah');

(function(str){
    let reversed = '';

    for (let x of str) {
        reversed = x + reversed;
    }

    console.log(str === reversed)
})("david")