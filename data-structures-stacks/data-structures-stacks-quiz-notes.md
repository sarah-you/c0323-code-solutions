# data-structures-stacks-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What does the acronym LIFO mean?

  - last in first out

- What methods are available on a Stack data structure?

  - push(), pop(), peek ()

- What must you do to access the value at an arbitrary point in a stack (not just the "top")?
  - use a sep function to access the value in the stack (use loops)

## Notes

A stack is a list-type abstract data structure that limits interaction to one end of the list. It can be pictured as a vertical stack of values, where the sides are hidden and only the top value can be seen. A real-life example of a stack is a can of Pringles ™ potato chips that only allows you to take one chip at a time.

![data-structures-stacks](./data-structures-stacks.png)

Stacks have an interface with at least two methods:

- `push(value)` - adds a `value` to the "top" of the stack ("push-in")
- `pop()` - removes the top value from the stack and returns it ("pop-out")

Together, these facilitate last-in-first-out (LIFO) operations: the last thing `push`ed onto the stack is the first thing that can be `pop`ed out.

Often, stacks include additional helper operations that make them a bit easier to use, such as `peek()`, which returns the "top" value of the stack without removing it.

#### Tips on Using Jest

**Jest** is a very popular tool for running unit tests. The `npm test` script runs Jest in "watch mode", which means it will run the tests and then wait for any of the files to be modified, at which point it will re-run the tests.

To use it effectively, you will want your terminal window to be somewhat tall. You can use the `f` key to tell Jest to only re-run the tests that are failing. This makes it easy to fix a test, save the file, make sure the test was really fixed, and then move to the next test.

Note that with `start` and `test`, `npm` does not require the use of `run`. So `npm test` will run the tests.

### Reminder

A `while loop` is a control flow structure in programming that repeatedly executes a block of code as long as a specified condition remains true.
