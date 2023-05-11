# es6-promises-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the three states a Promise can be in?
  pending (in task queue), fulfilled (already done in call stack), rejected (runs the catch);

- How do you handle the fulfillment of a Promise?
  pass a function to .then() -> this function will get executed;

- How do you handle the rejection of a Promise?
  pass a function to .catch() -> this function will get executed;

## Notes

if fulfilled: promise.then() > promise.finally();
if rejected: promise.catch() > promise.finally();
finally runs all the time after the other functions run; to know it ran;

Promise is just an object;
setTimeout() and some others are special async functions;

resolve & reject are a function; Promise passes parameters to fulfill/reject;
whatever gets passed into resolve function will come out of .then method;
whatever gets passed into reject function will come out of .catch method;
best practice for reject function is passing 'new Error()';
