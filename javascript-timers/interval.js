let counter = 4;
const $h1 = document.querySelector('.countdown-display');
const intervalId = setInterval(function () {
  --counter;
  $h1.textContent = counter;
  if (counter === 0) {
    $h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalId);
  }
}, 1000);
