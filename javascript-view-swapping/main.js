const $allTabs = document.querySelector('.tab-container');
console.log($allTabs);
const $tabList = document.querySelectorAll('.tab');
console.log($tabList);
const $pageList = document.querySelectorAll('.view');
console.log($pageList);

function selectTab(event) {
  if (event.target.matches('.tab')) {
    for (let i = 0; i < $tabList.length; i++) {
      if ($tabList[i] === event.target) {
        $tabList.setAttribute('class', 'tab active');
      } else {
        $tabList.setAttribute('class', 'tab');
      }
    }
  }
}

$allTabs.addEventListener('click', selectTab);
