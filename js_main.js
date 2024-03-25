window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var sitename = document.getElementById("sitename");
    var navbar = document.querySelector("nav");

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 100) {
        navbar.style.padding= "10px 10px";
        sitename.style.padding= "0";
        sitename.style.fontSize="0";
    } else {
        navbar.style.padding= "40px 10px";
        sitename.style.padding= "40px";
        sitename.style.fontSize="60px";
    }
}


document.addEventListener("DOMContentLoaded", function() {
    var footer = document.getElementById('footer');
    var navLinks = document.querySelectorAll("nav ul li a");
    var mainContent = document.querySelector('main'); 

    // check if a link is active
    function checkActiveLink() {
        var currentHash = window.location.hash;

        // Loop through each navigation link
        navLinks.forEach(function(link) {
            var linkHash = link.getAttribute("href");
            
            // Check if the link's hash matches the current hash
            if (linkHash === currentHash) {
                link.classList.add("active"); 
            } else {
                link.classList.remove("active"); 
            }
        });
    }

    // Call the checkActiveLink function on page load and whenever the hash changes
    window.addEventListener("load", function() {
        checkActiveLink();
        footerVisibility();
    });
    window.addEventListener("hashchange", checkActiveLink);

    // Call the underlineCurrentLink function on page load and scroll
    window.addEventListener("scroll", function() {
        checkActiveLink();
        footerVisibility();
    });

    // Function to show/hide footer based on scroll position
    function footerVisibility() {
        if ((window.innerHeight + window.scrollY) >= mainContent.offsetHeight) {
            footer.style.display = 'block';
        } else {
            footer.style.display = 'none';
        }
    }
});
