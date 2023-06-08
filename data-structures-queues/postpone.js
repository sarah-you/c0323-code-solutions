export default function postpone(queue) {
  if (queue.peek() === undefined) {
    return;
  }
  if (queue.peek() !== undefined) {
    const snooze = queue.dequeue();
    queue.enqueue(snooze);
  }
}
