document.addEventListener("DOMContentLoaded", function() {
    const footer = document.getElementById('footer');
    const navLinks = document.querySelectorAll("nav ul li a");
    const mainContent = document.querySelector('main');
    const sitename = document.getElementById("sitename");
    const navbar = document.querySelector("nav");

    // Adjust the navbar and sitename based on the scroll position
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

    // Function to underline the current active link
    function underlineActiveLink() {
        // Get the current URL path
        const currentPath = window.location.pathname.split('/').pop();

        // Iterate over each link and add the 'active' class if the href matches the currentPath
        navLinks.forEach(link => {
            if(link.getAttribute("href") === currentPath) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }

    // Function to show/hide footer based on scroll position
    function footerVisibility() {
        if ((window.innerHeight + window.scrollY) >= mainContent.offsetHeight) {
            footer.style.display = 'block';
        } else {
            footer.style.display = 'none';
        }
    }

    // Call the scrollFunction on scroll
    window.onscroll = function() {
        scrollFunction();
        footerVisibility(); // Also check the footer visibility on scroll
    };

    // Initial calls to set up the page
    underlineActiveLink(); // Check and underline the active link
    footerVisibility(); // Check the initial state of the footer visibility
});
