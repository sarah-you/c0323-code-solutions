const $circle = document.querySelector('.circle-off');
const $background = document.querySelector('.off');

function lightsOn(event) {
  if ($circle.className === 'circle-off') {
    $circle.className = 'circle-on';
    $background.className = 'on';
  } else if ($circle.className === 'circle-on') {
    $circle.className = 'circle-off';
    $background.className = 'off';
  }
}

$circle.addEventListener('click', lightsOn);
