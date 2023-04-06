function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name: ', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name: ', event.target.name);
}

function handleInput(event) {
  console.log('value of', event.target.name + ':' + event.target.value);
}

const $inputName = document.forms[0].elements.name;
const $inputEmail = document.forms[0].elements.email;
const $textareaMsg = document.forms[0].elements.message;

$inputName.addEventListener('focus', handleFocus);
$inputName.addEventListener('blur', handleBlur);
$inputName.addEventListener('input', handleInput);

$inputEmail.addEventListener('focus', handleFocus);
$inputEmail.addEventListener('blur', handleBlur);
$inputEmail.addEventListener('input', handleInput);

$textareaMsg.addEventListener('focus', handleFocus);
$textareaMsg.addEventListener('blur', handleBlur);
$textareaMsg.addEventListener('input', handleInput);
