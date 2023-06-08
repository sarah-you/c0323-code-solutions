export default function getFront(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  if (queue.peek() !== undefined) {
    return queue.peek();
  }
}
