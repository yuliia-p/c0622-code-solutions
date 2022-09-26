/* exported maxValue */

function maxValue(stack) {
  if (stack.peek() === undefined) return -Infinity;
  let maxNum = stack.pop();
  while (stack.peek() !== undefined) {
    const topNum = stack.pop();
    if (topNum > maxNum) {
      maxNum = topNum;
    }
  }
  return maxNum;
}
