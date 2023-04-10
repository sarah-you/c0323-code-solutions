const $taskList = document.querySelector('.task-list');

function clickTaskList(event) {
  console.log('event target:', event.target);
  console.log('event target tag name: ', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    const $completedTask = event.target.closest('.task-list-item');
    console.log('task completed: ', $completedTask);
    $completedTask.remove();
  }
}

$taskList.addEventListener('click', clickTaskList);
