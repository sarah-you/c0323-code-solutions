const $allTabs = document.querySelector('.tab-container');
const $tabList = document.querySelectorAll('.tab');
const $pageList = document.querySelectorAll('.view');

function selectTab(event) {
  if (event.target.matches('.tab')) {
    for (let i = 0; i < $tabList.length; i++) {
      if ($tabList[i] === event.target) {
        $tabList[i].setAttribute('class', 'tab active');
      } else {
        $tabList[i].setAttribute('class', 'tab');
      }
    }
    const $content = event.target.getAttribute('data-view');
    for (let i = 0; i < $pageList.length; i++) {
      if ($pageList[i].getAttribute('data-view') === $content) {
        $pageList[i].setAttribute('class', 'view');
      } else {
        $pageList[i].setAttribute('class', 'view hidden');
      }
    }
  }
}

$allTabs.addEventListener('click', selectTab);
