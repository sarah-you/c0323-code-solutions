function handleClick(event) {
  console.log('button clicked');
  console.log('event:', event);
  console.log('target:', event.target);
}

const $click = document.querySelector('.click-button');

$click.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('event:', event);
  console.log('target:', event.target);
}

const $hover = document.querySelector('.hover-button');
$hover.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event:', event);
  console.log('target:', event.target);
}

const $doubleClick = document.querySelector('.double-click-button');

$doubleClick.addEventListener('dblclick', handleDoubleClick);
