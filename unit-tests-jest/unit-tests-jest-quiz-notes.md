# unit-tests-jest-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are unit tests?

  - tests used to confirm that functions are running correctly

- Why is it important to write unit tests?

  - its versatile in the case that if people modify code, they can retest to make sure its correct with the update; it can catch bugs and make sure apps don't crash when launched

- What code should be tested with a unit test? What code is not well suited for unit tests?

  - good for unit tests: algos/logic in functions/methods
  - not good for unit tests: backend server and database related programs

- What is Jest? What are some other popular JavaScript unit testing frameworks?
  - the most popular JS unit testing framework
  - other popular JS unit testing frameworks: Mocha, Jasmine, and Ava

## Notes

What is Unit Testing?
https://smartbear.com/learn/automated-testing/what-is-unit-testing/

Common Matchers (JEST)
https://jestjs.io/docs/using-matchers

---

Good strategy to use when creating unit tests:

- happy path first (how the test should work)
- then list the edge cases (exceptions)
