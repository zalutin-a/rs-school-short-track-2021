const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.queue = {};
    this.length = 0;
  }

  get size() {
    return this.length;
  }

  enFirstEl(element) {
    this.queue = {};
    ListNode.call(this.queue, element);
  }

  setToEnd(obj1, element) {
    const obj = obj1;
    if (obj.next !== null) this.setToEnd(obj.next, element);
    else {
      obj.next = {};
      ListNode.call(obj.next, element);
    }
  }

  enqueue(element) {
    if (this.queue === null || !this.queue.value) this.enFirstEl(element);
    else this.setToEnd(this.queue, element);
    this.length += 1;
  }

  dequeue() {
    if (this.queue === null) return null;
    const { value } = this.queue;
    this.queue = this.queue.next;
    this.length = this.length > 0 ? this.length - 1 : 0;
    return value;
  }
}

module.exports = Queue;
