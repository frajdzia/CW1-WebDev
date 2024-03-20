document.addEventListener("DOMContentLoaded", function() {
    var footer = document.getElementById('footer');
    var navLinks = document.querySelectorAll("nav ul li a");
    var mainContent = document.querySelector('main'); // Define mainContent globally

    // Function to check if a link is active
    function checkActiveLink() {
        var currentHash = window.location.hash.substr(1); // Get the current hash without the '#' symbol

        // Loop through each navigation link
        navLinks.forEach(function(link) {
            var linkHash = link.getAttribute("href").substr(1); // Get the hash of the link without the '#' symbol
            
            // Check if the link's hash matches the current hash
            if (linkHash === currentHash) {
                link.classList.add("active"); // Add the 'active' class to the link if it's active
            } else {
                link.classList.remove("active"); // Remove the 'active' class from the link if it's not active
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
