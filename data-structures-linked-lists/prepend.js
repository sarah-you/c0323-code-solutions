/* eslint-disable no-unused-vars -- Remove me */
import LinkedList from './lib/linked-list.js';

export default function prepend(list, value) {
  const newNode = new LinkedList(value);
  newNode.next = list;
  return newNode;
}
