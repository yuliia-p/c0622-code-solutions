/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  const newNode = new LinkedList(value);
  while (list.next !== null) {
    list = list.next;
    if (!list.next) {
      list.next = newNode;
      return;
    }
  }
}
