# the-event-loop-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the JavaScript Event Loop?
  JS can only do one thing at a single point in time, but by using setTimeOut() function, it allows us to program asynchronously;

- What is different between "blocking" and "non-blocking" with respect to how code is executed?
  JS executes each code one at a time from top to bottom and if one code is running, the others wait and that's blocking (ex. mouse click); non-blocking would allow other codes to run while waiting for one to execute or setting a callback function to execute later;
  blocking -- user can't do anything and needs to wait;
  non-blcoking -- users can continue to interact with the website;

## Notes

programs execute codes 1 at a time, it just moves so fast that it looks like its running at the same time;

by default js will process synchronously(blocking), unless programmers state async;

execution (call) stack - each code that needs to be executed;

async functions don't get put on stack -> it gets put on Task Queue;

if call stack empties, event loop checks Task Queue to execute async code;
event loops keeps looping between these two to check if there's things to do;

Task Queue (2 things it does):
synchronously finish task or put itself back on task queue;
