window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    let sitename = document.getElementById("sitename");
    let navbar = document.querySelector("nav");

    if (document.body.scrollTop > 95 || document.documentElement.scrollTop > 95) {
        navbar.style.padding= "10px 10px";
        sitename.style.padding= "0";
        sitename.style.fontSize="0px";
    } else {
        navbar.style.padding= "40px 10px";
        sitename.style.padding= "40px";
        sitename.style.fontSize="60px";
    }
}


document.addEventListener("DOMContentLoaded", function() {
    let footer = document.getElementById('footer');
    let navLinks = document.querySelectorAll("nav ul li a");
    let mainContent = document.querySelector('main'); 

    // check if a link is active
    function checkActiveLink() {
        let currentHash = window.location.hash;

        // Loop through each navigation link
        navLinks.forEach(function(link) {
            let linkHash = link.getAttribute("href");
            
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
