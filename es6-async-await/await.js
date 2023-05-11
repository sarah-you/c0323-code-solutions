import fetch from './fetch.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = () => `${Math.round((Date.now() - startTime) / 1000)}s -`;

async function fetchOnce() {
  const response = await fetch('foo/bar.html');
  console.log(elapsed(), 'fetchOnce:', response);
}

async function fetchSeveral() {
  const response1 = await fetch('foo1/bar.html');
  console.log(elapsed(), 'fetchSeveral1:', response1);
  const response2 = await fetch('foo2/bar.html');
  console.log(elapsed(), 'fetchSeveral2:', response2);
  const response3 = await fetch('foo3/bar.html');
  console.log(elapsed(), 'fetchSeveral3:', response3);
}

async function fetchChained() {
  const response1 = await fetch('foo-chain/bar.html');
  console.log(elapsed(), 'fetchChained1:', response1);
  const response2 = await fetch(response1);
  console.log(elapsed(), 'fetchChained2:', response2);
  const response3 = await fetch(response2);
  console.log(elapsed(), 'fetchChained3:', response3);
}

fetchOnce()
  .then(() => fetchSeveral())
  .then(() => fetchChained());
