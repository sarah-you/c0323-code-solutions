export default function takeFront(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  if (queue.peek() !== undefined) {
    return queue.dequeue();
  }
}
