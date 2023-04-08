/* exported todos */

let todos = [];

function beforeUnload(event) {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);
}

window.addEventListener('beforeunload', beforeUnload);

const previousTodosJSON = localStorage.getItem('javascript-local-storage');
todos = JSON.parse(previousTodosJSON);
