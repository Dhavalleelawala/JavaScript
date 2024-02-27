  //Q-4 Given an integer array nums, find the subarray with the largest sum, and return its sum.
  // and return its sum.

  // input: [-2, 1, -3, 4, -1, 2, 1, -5, 4] ---->>>>> Output: 6

  function maxSubArray(nums) {
    let maxSum = nums[0];
    let startIdx = 0;
    let endIdx = 0;
    for (i = 1; i < nums.length; i++) {
      let currentMax = 0;
      for (j = i; j < nums.length; j++) {
        currentMax = currentMax + nums[j];
        if (currentMax > maxSum) {
          maxSum = currentMax;
          startIdx = i;
          endIdx = j;
        }
      }
    }
    return {
      sum: maxSum,
      subArray: nums.slice(startIdx,endIdx+1)
    };
  }

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));