/* exported getLength */

function getLength(list) {
  let count = 1;
  if (!list.next) {
    count = 1;
  }
  while (list.next !== null) {
    count++;
    list = list.next;
  }
  return count;
}
