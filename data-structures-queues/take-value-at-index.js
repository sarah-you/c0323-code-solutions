export default function takeValueAtIndex(queue, index) {
  let count = 0;
  while (index > count) {
    if (queue.peek() === undefined) {
      return undefined;
    }
    const snooze = queue.dequeue();
    queue.enqueue(snooze);
    count++;
  }
  return queue.dequeue();
}
