const $off = document.querySelector('.circle-off');
const $bodyOff = document.querySelector('.off');
// const $on = document.querySelector('.circle-on');
// const $bodyOn = document.querySelector('.on');

function lightsOn(event) {
  if ($off.className === 'circle-off') {
    $off.className = 'circle-on';
    $bodyOff.className = 'on';
  } else if ($off.className === 'circle-on') {
    $off.className = 'circle-off';
    $bodyOff.className = 'off';
  }
}

$off.addEventListener('click', lightsOn);
