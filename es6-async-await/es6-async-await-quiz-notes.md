# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?
  for promises to be written cleaner;

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  async and await will wait until promise is fulfilled or rejected, whereas promise.then and .catch will continue to execute but won't execute the .then until promise settles;

syntactic difference; makes it easier to write the code but same thing is happening; it just looks more synchronous

- When do you use `async`?
  when you need programs to run without waiting and return a promise;

to signal for await;

- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  await is used to wait for a promise to be settled;
  you don't use await in synchronous functions;

- How do you handle errors with `await`?
  try, catch; -- only way;

- What do `try`, `catch` and `throw` do? When do you use them?
  after promise is settled, you test it using try and throw the function and catch the error;

try goes before await
catch goes after await
throw throws an exception for errors; code will go to closest catch and run it;

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  it will be returned immediately and not show up in the stack trace; will get an error;

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  async await because the promise is dealt behind the scenes which is less work for me;

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
