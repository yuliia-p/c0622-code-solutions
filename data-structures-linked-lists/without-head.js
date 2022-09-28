/* exported withoutHead */

function withoutHead(list) {
  while (list.next.data != null) {
    list.next.data = list.data;
  }
  return list;
}
