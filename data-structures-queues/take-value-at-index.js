/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) return undefined;
  let count = 0;
  while (count < index) {
    queue.enqueue(queue.dequeue());
    count++;
  }
  return queue.dequeue();
}
