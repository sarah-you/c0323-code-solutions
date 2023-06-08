# data-structures-queues-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What does the acronym FIFO mean?

  - first in first out

- What methods are available on a Queue data structure?

  - enqueue(value)
  - dequeue()
  - peek()

- What must you do to access the value at an arbitrary point in a queue (not just the "front")?
  - you have to use a while loop with a condition (such as a counter) to cycle through each queue using enqueue and dequeue until you access the value

## Notes

A queue is a list-type abstract data structure that limits interaction with its contents. It can be pictured as a horizontal line of values, where values can **only be added at the back and removed from the front**. A real-life example of a queue is a line of people at the DMV. If anybody cuts in line, the people in the line cut _them_.

![data structure queues](./data%20structure%20queues.png)

Queues have an interface with at least two methods:

- `enqueue(value)` - adds a `value` to the "back" of the queue
- `dequeue()` - removes the "front" value from the queue and returns it

Together, these facilitate first-in-first-out (FIFO) operations: the first thing `enqueued` onto the queue is the first thing that can be `dequeued` out.

Often, queues include additional helper operations that make them a bit easier to use, such as `peek()`, which returns the "front" value of the queue without removing it.
