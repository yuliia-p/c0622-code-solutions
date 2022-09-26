/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  let topValue = stack.peek();
  if (topValue === undefined) {
    return undefined;
  } else {
    topValue = stack.pop();
    stack.push(value);
    stack.push(topValue);
  }
}
