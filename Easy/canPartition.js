/*
Write a function that returns true if you can partition an array into one element and the rest, such that this element is equal to the product of all other elements excluding itself.

Examples
canPartition([2, 8, 4, 1]) ➞ true
// 8 = 2 x 4 x 1

canPartition([-1, -10, 1, -2, 20]) ➞ false

canPartition([-1, -20, 5, -1, -2, 2]) ➞ true
Notes
The array may contain duplicates.
Multiple solutions can exist, any solution is sufficient to return true.
*/

function canPartition(nums) {
  //your code
  let j = 0;
  let i = 0;
  let mul = 1;
  for (i = 0; i < nums.length; i++) {
    for (j = 0; j < nums.length; j++) {
      if (j === i) continue;
      mul *= nums[j];
      if (mul === nums[i]) return true;
    }
    mul = 0;
  }
  return false;
}
console.log(canPartition([-1, -20, 5, -1, -2, 2]));
exports.solution = canPartition;

//${[-1,-20,5,-1,-2,2]} |${true}
//${[2,8,4,1]} |${true}
//${[1,1,-1,1]} |${false}
