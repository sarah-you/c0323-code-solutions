const $contactForm = document.querySelector('#contact-form');

function handleSubmit(event) {
  event.preventDefault();
  const contactData = {};
  contactData.name = $contactForm.name.value;
  contactData.email = $contactForm.email.value;
  contactData.message = $contactForm.message.value;
  console.log('contactData: ', contactData);
  document.querySelector('#contact-form').reset();
}

$contactForm.addEventListener('submit', handleSubmit);
