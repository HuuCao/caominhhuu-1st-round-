// 2. Bài toán Two Sum
function twoSum(nums, target) {
    const seen = new Map();
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (seen.has(complement)) {
            result.push([seen.get(complement), i]);
        }
        seen.set(nums[i], i);
    }
    return result;
}

console.log(twoSum([2, 7, 11, 15], 9));  // [[0, 1]]
console.log(twoSum([3, 2, 4, 3], 6));    // [[1, 2], [0, 3]]