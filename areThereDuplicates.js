/* implement a function areThereDuplicates which accepts a variable number of arguments and checks whether ther are any duplicates among the arguments passed in.
you can solve this using the frequency counter pattern or wuth multiple pointers pattern.

Examples: 
areThereDuplicates(1,2,3) // false
areThereDuplicates(1,2,2) // true
areThereDuplicates('a','b','c', 'a') // true

Complexities:
Time - O(n)
Space - O(n)
*/


// Solution 1 - Frequency Counter O(n)

function areThereDuplicates() {
    let collection = {}
    
    for(let val in arguments) {
        collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }

    for(let key in collection) {
        if(collection[key] > 1) return true;
    }

    return false;
}

// Solution 2 - Two Pointers O(n)


function areThereDuplicates(...args) {
// Two pointers
args.sort((a,b) => a > b);
let start = 0;
let next = 1;
while(next < args.length){
  if(args[start] === args[next]){
      return true
  }
  start++
  next++
}
return false
}


// One liner solution

function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
  }
  