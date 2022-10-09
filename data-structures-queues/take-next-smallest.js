/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (queue.peek() === undefined) return;
  const firstValue = queue.dequeue();
  if (firstValue === undefined) {
    return firstValue;
  } else {
    let num = firstValue;
    while (num >= queue.peek()) {
      queue.enqueue(num);
      num = queue.dequeue();
    }
    return num;
  }
}
