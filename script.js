const toggleMenu = document.getElementById('toggleMenu');
const sideMenu = document.getElementById('sideMenu');
const mainContent = document.getElementById('mainContent');

toggleMenu.addEventListener('click',function() {
  if (sideMenu.style.left === '0%'){
    sideMenu.style.left = '-50%';
  } else {
    sideMenu.style.left ='0%';
  }
});