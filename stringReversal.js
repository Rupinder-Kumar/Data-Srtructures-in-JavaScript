/*
Problem: given a string 
reverse it
reverse('apple') === 'elppa';
reverse('Greetings!') === '!sgniteerg
*/

/* Solution 1
1. given a string - convert it into array
2. reverse the array
3. turn the array back into string
*/

const revString = (str) => {
    const arr = str.split('');
    arr.reverse();
    str = arr.join('');
    console.log(str);
    return str;
}

revString("apple");

/* Solution 2
1. given a string - create empty string
2. loop through each character
3. return the reversed string
*/

(function(str) {
    let reversed = '';

    for(let character of str) {
        reversed = character + reversed
    }
    console.log(reversed);

})('Greetings!')