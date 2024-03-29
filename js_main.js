document.addEventListener("DOMContentLoaded", function() {
    const footer = document.getElementById('footer');
    const navLinks = document.querySelectorAll("nav ul li a");
    const mainContent = document.querySelector('main');
    const sitename = document.getElementById("sitename");
    const navbar = document.querySelector("nav");

    function scrollFunction() {
        if (document.body.scrollTop > 95 || document.documentElement.scrollTop > 95) {
            navbar.style.padding = "10px 10px";
            sitename.style.padding = "0";
            sitename.style.fontSize = "0px";
        } else {
            navbar.style.padding = "40px 10px";
            sitename.style.padding = "40px";
            sitename.style.fontSize = "60px";
        }
    }

    function footerVisibility() {
        if ((window.innerHeight + window.scrollY) >= mainContent.offsetHeight) {
            footer.style.display = 'block';
        } else {
            footer.style.display = 'none';
        }
    }

    window.onscroll = function() {
        scrollFunction();
        footerVisibility();
    };
    footerVisibility();

    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('nav a');
    const menuLength = menuItem.length;

    for (let i = 0; i < menuLength; i++) {
        if(menuItem[i].href === currentLocation) {
            menuItem[i].className = "active";
        }
    }
});
