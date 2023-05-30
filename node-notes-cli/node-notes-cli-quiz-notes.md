# node-notes-cli-notes

setting up the back-end logic so that users can read their notes, add a note, delete a note, and update a note

## Notes

The `process.argv` array in Node.js contains the command-line arguments passed to the Node.js process. Here's a breakdown of the `process.argv` array:

- `process.argv[0]`: The first element represents the absolute path to the Node.js executable.
- `process.argv[1]`: The second element typically represents the path to the JavaScript file being executed.
- `process.argv[2]` onwards: The remaining elements represent any command-line arguments provided when running the script, starting from index 2.

For example, if you run the command `node myscript.js arg1 arg2`, the `process.argv` array will be:

```
[
  '/path/to/node/executable',  // process.argv[0]
  '/path/to/myscript.js',      // process.argv[1]
  'arg1',                      // process.argv[2]
  'arg2'                       // process.argv[3]
]
```

You can access and manipulate these command-line arguments within your Node.js script as needed.
The features for this application are as follows:

- **User can read their notes:** asking the program to `read` should display all notes in the `data.json` file. See the example GIF for how they should appear.
- **User can add a note:** giving the program a new note should append the note to the list of notes in the `data.json` file. Each new note will be given its own `id`.
- **User can delete a note:** the user should be able to ask the program to `delete` a note by its `id`.
- **User can update a note:** the user should be able to replace the content of an existing note given its `id` and the new `content`.

Each of these operations will involve some mixture of reading the `data.json` file, parsing it into JavaScript objects, possibly modifying the data, serializing it back into a JSON string, and then overwriting the JSON string back into `data.json`.

#### TIPS

- The `nextId` property should never be reset. It serves as a unique identifier and not a "counter".
- The basic outline of each function should be:
  - read `data.json` and parse it
  - perform the action
  - if the data changed, stringify it and write it to `data.json`
- Use `JSON.stringify(data, null, 2)` to create a JSON string with nice indentation and formatting before writing it back to `data.json`.
- Use `try/catch` to catch and report file system errors. Best would be to use it once around the code that processes the command line arguments.

---

\*\*NOTE: this code can be broken up into reusable functions if needed (due to limit on time, this code is not as efficient as it could be)

```JavaScript
import { readFile, writeFile } from 'node:fs/promises';

//global variables
const rawData = await readFile('data.json', 'utf8');
const data = JSON.parse(rawData);
const action = process.argv[2]; // the command input in the cli ("read", "create", "update", "delete")

// reusable function
// saves "data" object as a JSON file named "data.json" by converting it to a string and rewriting it to the file system using "writeFile". The data is formatted with 2 space indentation for readibility in file
async function updateData(data) {
  await writeFile('data.json', JSON.stringify(data, null, 2));
}

// main logic
try {
  switch (action) {
    case 'read':
      for (const prop in data.notes) {
        console.log(`${prop}: ${data.notes[prop]}`);      // grabs the data inside data.json notes object and prints it in terminal
      }
      break;
    case 'create': {
      data.notes[data.nextId] = process.argv[3];          // nextId is being assigned as the property of the new note, which is about to be added via the command line input
      data.nextId++;                                      // nextId inside the data object (in data.json) is incremented
      updateData(data);
      break;
    }
    case 'update': {                                    // to update, we need the id, its value, and add to it
      const id = process.argv[3];                       // assigns the command line input after "node app.js update (process.argv[3])" as "id"; doing this because we're trying to access a specific note with that id
      if (data.notes[id]) {
        data.notes[id] = process.argv[4];              // if that id exists inside data.notes, then whatever value is in the command line's process.argv[4], assign/add it as the value for the id property inside data.notes
        updateData(data);
      } else {
        console.log('Note cannot be found');
      }
      break;
    }
    case 'delete': {                                   // to delete, we need to access the id and its value and remove it
      const id = process.argv[3];                     // access the id
      if (data.notes[id]) {                           // if the id written in the command line process.argv[3] exists inside data.notes, delete the id and its value
        delete data.notes[id];
        updateData(data);
      } else {
        console.log('Note cannot be found');
      }
      break;
    }
    default:
      console.log('Unknown command');               // if none of the case actions match, then return unknown command
  }
} catch (err) {
  console.error(err.message);
}
```
