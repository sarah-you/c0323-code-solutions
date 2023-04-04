let clicks = 0;
const $button = document.querySelector('.hot-button');
const $clicked = document.querySelector('.click-count');

function buttonClicked(event) {
  clicks++;
  $clicked.textContent = 'Clicks: ' + clicks;
  console.log($clicked.textContent);
  if (clicks < 4) {
    $button.className = 'hot-button cold';
  } else if (clicks < 7) {
    $button.className = 'hot-button cool';
  } else if (clicks < 10) {
    $button.className = 'hot-button tepid';
  } else if (clicks < 13) {
    $button.className = 'hot-button warm';
  } else if (clicks < 16) {
    $button.className = 'hot-button hot';
  } else {
    $button.className = 'hot-button nuclear';
  }
}

$button.addEventListener('click', buttonClicked);
