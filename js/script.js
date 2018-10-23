var burger_menu_icon = document.querySelector('.dropdown');
var nav_element = document.querySelector("header#header div.nav-logo nav div");

console.log(nav_element);

burger_menu_icon.addEventListener("click", function (e) {
  
        nav_element.classList.toggle("menu");

})
