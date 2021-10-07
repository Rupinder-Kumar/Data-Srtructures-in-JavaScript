// write a recursive function which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.
// SAMPLE INPUT / OUTPUT
// const isOdd = val =&gt; val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false

const isOdd = val => val % 2 !== 0;


function someRecursive(nums, callback){
    if(nums.length === 0) return false;
    
    if(callback(nums[0])) return true;
    
    return someRecursive(nums.slice(1), callback);
    
    

}

someRecursive([1,2,3,4],isOdd)