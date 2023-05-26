# fetch-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What does `fetch()` return?

  - a `promise` that resolves to a `Response` object.

- What is the default request method used by `fetch()`?

  - 'GET'

- How do you specify the request method (`GET`, `POST`, etc.) when calling `fetch`?

  - as an object as the 2nd argument
  - fetch(url, {method})

- How does `fetch` report errors?
  - it resolves and sets the `ok` poperty to false
  - if there's a network error, it will `throw` an error

## Notes

Fetch is a web API method that allows you to make network requests to retrieve resources from a server. It is commonly used to fetch data from an API endpoint and handle the response in JavaScript.

For example, you can use fetch to retrieve data in JSON format:

```JavaScript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error('Request failed');
    }
    const data = await response.json();
    // Handle the retrieved data
    console.log(data);
  } catch (error) {
    // Handle any errors that occur during the fetch request
    console.log(error);
  }
}

fetchData();
```

In this example, the `fetchData()` function is defined as an `async` function. Within the function, `await` is used to pause the execution and wait for the Promise returned by `fetch()` to resolve.

If the response is not successful (`response.ok` is `false`), an error is thrown using the `throw` statement.

If the response is successful, `await` is used again to extract the JSON data using `response.json()`. This also returns a Promise, which allows us to wait for it to resolve.

Any errors that occur during the fetch request or JSON parsing are caught in the `catch` block, where they can be handled appropriately.

Finally, the `fetchData()` function is called to initiate the data fetching process.

#### NOTE

In `response.ok`, `.ok` is a Boolean property of the `Response` object in JavaScript's `fetch()` API that indicates whether the HTTP response status code is within the range of 200-299 (indicating a successful response).

### Supplying request options

```JavaScript
// Example POST method implementation:
async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData("https://example.com/answer", { answer: 42 }).then((data) => {
  console.log(data); // JSON data parsed by `data.json()` call
});
```

#### Syntax for fetch

```JavaScript
fetch(resource)
fetch(resource, options)
```

#### Return Value for fetch

A `Promise` that resolves to a `Response` object.

#### Syntax for json()

```JavaScript
json()
```

#### Return value for json()

A `Promise`(object) that resolves to a JavaScript object. This object could be anything that can be represented by JSON — an object, an array, a string, a number…
