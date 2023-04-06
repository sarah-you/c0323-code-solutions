const $modalOpen = document.querySelector('.open-modal');
const $defaultModal = document.querySelector('.container');
const $showModal = document.querySelector('.hidden-modal');

function openModal(event) {
  $defaultModal.className = 'container-modal-opened';
  $showModal.className = 'visible-modal';
}

$modalOpen.addEventListener('click', openModal);

const $closeModal = document.querySelector('.close-modal');

function closeModal(event) {
  $defaultModal.className = 'container';
  $showModal.className = 'hidden-modal';
}

$closeModal.addEventListener('click', closeModal);
