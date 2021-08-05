// find indexes in an array where sum is 0
// for e.g [-5,5] = 0 -> true
// [-5,1] = -4 -> false

// naive solution -> complexity O(n^2)

function sumZero(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}


sumZero([-4,-3,-2,-1,0,1,2,5])

// Refactored solution -> complexity O(n)

function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;

    while(left > right) {
        let sum = arr[left] + arr[right];

        if(sum == 0) {
            return [arr[left], arr[right]];
        } else if(sum > 0){
            right--;
        } else {
            right++;
        }
    }
}

sumZero([-4,-3,-2,-1,0,1,2,3,10])