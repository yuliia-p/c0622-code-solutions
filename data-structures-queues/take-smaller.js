/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() === undefined) return;
  const firstValue = queue.dequeue();
  const secondValue = queue.dequeue();
  if (secondValue === undefined) {
    return firstValue;
  }
  if (firstValue > secondValue) {
    queue.enqueue(firstValue);
    return secondValue;
  } else {
    queue.enqueue(secondValue);
    return firstValue;
  }
}
