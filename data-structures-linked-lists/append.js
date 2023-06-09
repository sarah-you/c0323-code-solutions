/* eslint-disable no-unused-vars */
import LinkedList from './lib/linked-list.js';

export default function append(list, value) {
  const newNode = new LinkedList(value);

  while (list.next !== null) {
    list = list.next;
  }
  list.next = newNode;
}
