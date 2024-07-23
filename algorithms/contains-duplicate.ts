function containsDuplicate(nums: number[]): any {
  let stack: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      stack = [...nums];
      stack.splice(i, 1);

      if (nums[i] === stack[j]) {
        return true;
      }
    }
  }

  return false;
}

console.log(containsDuplicate([1, 2, 3, 1]));

// this has terrible big O complexity
