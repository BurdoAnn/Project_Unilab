let navbarlink = document.getElementById("nav");
let toggelebuttonburger = document.getElementById("toggle-button");

toggelebuttonburger.addEventListener('click', function() {
    navbarlink.classList.add('active');
})