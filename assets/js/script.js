var menuIcon = document.querySelector(".fa-bars");
var sidebar = document.querySelector(".sidebar");
var contentLeft = document.querySelector(".content-left");
var listitem = document.querySelector(".list-item");
var header = document.querySelector(".header")
menuIcon.onclick = function() {
    sidebar.classList.toggle("small-sidebar");
    contentLeft.classList.toggle("content-left-small");

}