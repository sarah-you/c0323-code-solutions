const $allTabs = document.querySelector('.tab-container');
console.log($allTabs);
const $tabList = document.querySelectorAll('.tab');
console.log($tabList);
const $pageList = document.querySelectorAll('.view');
console.log($pageList);
const $tabActive = document.querySelector('.active');
console.log($tabActive);

function selectTab(event) {
  if (event.target.matches('.tab')) {
    for (let i = 0; i < $tabList.length; i++) {
      if ($tabList[i] === event.target) {
        event.target.setAttribute('class', 'tab active');
      } else {
        $tabActive.setAttribute('class', 'tab');
      }
    }
  }
}

$allTabs.addEventListener('click', selectTab);
