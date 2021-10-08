// Write a recursive function called flatten
// which accepts an array of arrays and returns a new array with all values flattened.
function flatten(arr){
    if(arr.length === 0) return [];
    let flattenArray = []
    for(let i =0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            flattenArray = flattenArray.concat(flatten(arr[i]))
        } else {
            flattenArray.push(arr[i])
        }
    }
    
    return flattenArray;
  }
  
  // flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
  // flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
  // flatten([[1],[2],[3]]) // [1,2,3]
  // flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3