/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  const list = l;
  function lis(obj) {
    const outPutObg = { ...obj };
    if (outPutObg.next !== null) {
      if (outPutObg.next.value) {
        if (outPutObg.next.value === k) outPutObg.next = lis(outPutObg.next.next) || null;
        else outPutObg.next = lis(outPutObg.next);
      }
    }
    return outPutObg;
  }
  if (list.value !== k) {
    return lis(list);
  }
  return lis(list.next);
}

module.exports = removeKFromList;
