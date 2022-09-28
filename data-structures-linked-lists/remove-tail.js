/* exported removeTail */

function removeTail(list) {
  if (!list.next) return;
  while (list.next.next !== null) {
    list = list.next;
    if (!list.next.next) {
      list.next = null;
      return;
    }
  }
}
