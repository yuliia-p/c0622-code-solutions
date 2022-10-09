/* exported postpone */

function postpone(queue) {
  if (queue.peek() !== undefined) {
    const toBack = queue.dequeue();
    queue.enqueue(toBack);
  }
}
