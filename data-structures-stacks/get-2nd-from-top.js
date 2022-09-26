/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() === undefined) {
    return undefined;
  } else {
    const topValue = stack.pop();
    const secondFromTop = stack.peek();
    stack.push(topValue);
    return secondFromTop;
  }
}
