# react-rendering-lists-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When would we want to dynamically create a list of React components?

  - to show list of comments or gallery of images

- Why is it important for React components to be data-driven?

  - it allows dynamic rendering (as in adjust visuals based on change in data, allowing UI to update as data changes
  - if it's data driven, the react components can accept various inputs, which means the components will be reusable

- What `Array` method is commonly used to create a list of React components?

  - .map() method;

- Why do components in a list need to have unique keys?

  - to easily access data even when things are getting updated (deleted, reordered, etc.)

- What is the best value to use as a "key" prop when rendering lists?
  - id as object properties

## Notes

use `filter()` and `map()` with React to filter and transform your array of data into an array of components.

Rendering Lists https://react.dev/learn/rendering-lists

#### Rendering data from arrays

Say that you have a list of content.

```JavaScript
<ul>
  <li>Creola Katherine Johnson: mathematician</li>
  <li>Mario José Molina-Pasquel Henríquez: chemist</li>
  <li>Mohammad Abdus Salam: physicist</li>
  <li>Percy Lavon Julian: chemist</li>
  <li>Subrahmanyan Chandrasekhar: astrophysicist</li>
</ul>
```

The only difference among those list items is their contents, their data. You will often need to show several instances of the same component using different data when building interfaces: from lists of comments to galleries of profile images. In these situations, you can store that data in JavaScript objects and arrays and use methods like `map()` and `filter()` to render lists of components from them.

Here’s a short example of how to generate a list of items from an array:

1. Move the data into an array:

```JavaScript
const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];
```

2. Map the `people` members into a new array of JSX nodes, `listItems`:

```JavaScript
const listItems = people.map(person => <li>{person}</li>);
```

Return `listItems` from your component wrapped in a `<ul>`:

```JavaScript
return <ul>{listItems}</ul>;
```

Here is the result:

```JavaScript
const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];

export default function List() {
  const listItems = people.map(person =>
    <li>{person}</li>
  );
  return <ul>{listItems}</ul>;
}
```

Console:

```
Warning: Each child in a list should have a unique "key" prop.

Check the render method of `List`. See https://reactjs.org/link/warning-keys for more information.
    at li
    at List
```

Notice the sandbox above displays a console error:

```
Warning: Each child in a list should have a unique “key” prop.
```

#### Filtering arrays of items

This data can be structured even more.

```JavaScript
const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
}, {
  name: 'Percy Lavon Julian',
  profession: 'chemist',
}, {
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
}];
```

Let’s say you want a way to only show people whose `profession` is `'chemist'`.

You can use JavaScript’s `filter()` method to return just those people. This method takes an array of items, passes them through a “test” (a function that returns `true` or `false`), and returns a new array of only those items that passed the test (returned `true`).

The “test” function for this looks like `(person) => person.profession === 'chemist'`

1. Create a new array of just “chemist” people, `chemists`, by calling `filter()` on the `people` filtering by `person.profession === 'chemist'`:

```JavaScript
const chemists = people.filter(person =>
  person.profession === 'chemist'
);
```

2. Now map over `chemists`:

```JavaScript
const listItems = chemists.map(person =>
  <li>
     <img
       src={getImageUrl(person)}
       alt={person.name}
     />
     <p>
       <b>{person.name}:</b>
       {' ' + person.profession + ' '}
       known for {person.accomplishment}
     </p>
  </li>
);
```

3. Lastly, return the `listItems` from your component:

```JavaScript
return <ul>{listItems}</ul>;
```

```JavaScript
// App.js
import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
  const chemists = people.filter(person =>
    person.profession === 'chemist'
  );
  const listItems = chemists.map(person =>
    <li>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return <ul>{listItems}</ul>;
}
```

```JavaScript
// data.js
export const people = [{
  id: 0, // used in JSX as a key
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
  accomplishment: 'spaceflight calculations',
  imageId: 'MK3eW3A'
}, {
  id: 1, // used in JSX as a key
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
  accomplishment: 'discovery of Arctic ozone hole',
  imageId: 'mynHUSa'
}, {
  id: 2, // used in JSX as a key
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
  accomplishment: 'electromagnetism theory',
  imageId: 'bE7W1ji'
}, {
  id: 3, // used in JSX as a key
  name: 'Percy Lavon Julian',
  profession: 'chemist',
  accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
  imageId: 'IOjWm71'
}, {
  id: 4, // used in JSX as a key
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
  accomplishment: 'white dwarf star mass calculations',
  imageId: 'lrWQx8l'
}];
```

```JavaScript
// utils.js
export function getImageUrl(person) {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    's.jpg'
  );
}
```

Console:

```
Warning: Each child in a list should have a unique "key" prop.

Check the render method of `List`. See https://reactjs.org/link/warning-keys for more information.
    at li
    at List
```

#### Note:

Arrow functions containing `=> {` are said to have a “block body”. They let you write more than a single line of code, but you have to write a return statement yourself. If you forget it, nothing gets returned!

you must write return explicitly if your `=>` is followed by a `{` curly brace!

#### Keeping list items in order with key

Notice that all the sandboxes above show an error in the console:

```
Warning: Each child in a list should have a unique “key” prop.
```

You need to give each array item a `key` — a string or a number that uniquely identifies it among other items in that array:

```JavaScript
<li key={person.id}>...</li>
```

#### NOTE

JSX elements directly inside a `map()` call always need keys!

Keys tell React which array item each component corresponds to, so that it can match them up later. This becomes important if your array items can move (e.g. due to sorting), get inserted, or get deleted. A well-chosen `key` helps React infer what exactly has happened, and make the correct updates to the DOM tree.

Rather than generating keys on the fly, you should include them in your data

```JavaScript
import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
  const listItems = people.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}</b>
          {' ' + person.profession + ' '}
          known for {person.accomplishment}
      </p>
    </li>
  );
  return <ul>{listItems}</ul>;
}
```

#### Where to get your key

Different sources of data provide different sources of keys:

- Data from a database: If your data is coming from a database, you can use the database keys/IDs, which are unique by nature.
- Locally generated data: If your data is generated and persisted locally (e.g. notes in a note-taking app), use an incrementing counter, `crypto.randomUUID()` or a package like `uuid` when creating items.

#### Rules of keys

- **Keys must be unique among siblings.** However, it’s okay to use the same keys for JSX nodes in different arrays.
- **Keys must not change** or that defeats their purpose! Don’t generate them while rendering.
- **put your key in the outermost element (typically a `<div>`)**

You might be tempted to use an item’s index in the array as its key. In fact, that’s what React will use if you don’t specify a `key` at all. But the order in which you render items will change over time if an item is inserted, deleted, or if the array gets reordered. Index as a key often leads to subtle and confusing bugs.

Similarly, do not generate keys on the fly, e.g. with `key={Math.random()}`. This will cause keys to never match up between renders, leading to all your components and DOM being recreated every time. Not only is this slow, but it will also lose any user input inside the list items. Instead, use a stable ID based on the data.

Note that your components won’t receive `key` as a prop. It’s only used as a hint by React itself. If your component needs an ID, you have to pass it as a separate prop: `<Profile key={id} userId={id} />`.
