const closeMenuButton= document.getElementById("close-menu-button");
const sideDrawer= document.getElementById("side-drawer");
const menuButton= document.getElementById("menu-btn");
const transButton=document.getElementById("trans-button");
const ogButton= document.getElementById("og-button");
const transPoem = document.getElementById("translate");
const ogPoem=document.getElementById("og");


menuButton.addEventListener('click', function() {
    sideDrawer.style.display='block';
});

closeMenuButton.addEventListener('click', function() {
    sideDrawer.style.display='none';
});
transButton.addEventListener('click', function() {
    transPoem.style.display='grid';
    ogPoem.style.display='none';
    transButton.style.borderBottom='1px solid black';
    ogButton.style.borderBottom='none';
});
ogButton.addEventListener('click', function() {
    ogPoem.style.display='grid';
    transPoem.style.display='none';
    ogButton.style.borderBottom='1px solid black';
    transButton.style.borderBottom='none';
});






