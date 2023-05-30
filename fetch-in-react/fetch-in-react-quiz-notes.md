# fetch-in-react-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How can `useEffect` be used to load data for a component?

  - use fetch() inside the useEffect; this will allow for data to be loaded after the page renders

- What browser function can be used to make HTTP requests to a server in React?

  - fetch()

- How do you use `useEffect` to load component data just once when the component mounts?

  - by passing empty dependency array after the first useEffect argument

- How do you use `useEffect` to load component data every time the data key changes?

  - by adding data key as a dependency array after the first useEffect argument (ex. userId -- from the exercise)

- In a large-scale production app, what are some better alternatives for loading and managing backend data?
  - React Query, Vercel SWR

## Notes

This exercise explores one technique for reading data for a component using `fetch`: making use of the `useEffect` hook. However, note that while this approach works OK for small applications or in development, in a production application you will find that it results in excess network traffic and makes it difficult to update other components that rely on the same data. Because of this, you will most likely want to manage all your data accesses with a third-party data management library. Some good open source packages are **React Query** and **Vercel SWR** work.
