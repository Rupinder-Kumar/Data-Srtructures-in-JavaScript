// product of array using recursion
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(nums) {
    if(nums.length === 0) return 1;
    
    return nums[0]*productOfArray(nums.slice(1))
}

productOfArray([1,2,3,10])