# javascript-conditionals-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- In JavaScript, when is scope determined?

  - lexical scope (at parse time)

- What allows JavaScript functions to "remember" variables from their surroundings?

  - javascript closures

- What values does a closure contain?

  - the function itself and its reference to variables that are outside of the function

```JavaScript
function x() {
  for (let i = 0; i < 10; i++) {
    const foo = 3;
    console.log(foo, i, time, foop);
  }
}
```

closure will contain function x, time, and foop; when the code runs, it looks in the closure to find reference to the variables outside of the function

- When is a closure created?

  - when a nested function references variables in the outer function (this preserves those outer function variables even after outer function finished executing)
  - when it is referenced/called (could also be when passed as parameter/prop)

- How can you tell if a function will be created as a closure?

  - if it uses variables defined outside of its own scope.

- In React, what is one important case where you need to know if a closure was created?
  - when using useEffect and list it as dependency (creates a new instance closure every time, changing the dependency data, calling rerender inifinitely -- needs a callback)
  - when using event handlers that depend on variables from the enclosing component's scope to ensure proper state management

## Notes

`Lexical scope` refers to the concept that the scope of a variable is determined by its position in the source code (global/local), and it is defined by the placement of variables and blocks in the code rather than by runtime conditions or function calls.

A `closure` is a combination of a function and the lexical environment within which that function was declared, allowing the function to access and manipulate variables from its outer scope even after the outer function has finished executing.
