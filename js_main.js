document.addEventListener("DOMContentLoaded", function() {
    var footer = document.getElementById('footer');
    var mainContent = document.querySelector('main');
    var navLinks = document.querySelectorAll("nav ul li a");

    // Function to add underline to the current active link
    function underlineCurrentLink() {
        var sectionIds = ["home", "gallery", "shop", "user_profile", "feedback", "sitemap", "team", "content"];

        for (var i = 0; i < sectionIds.length; i++) {
            var sectionId = sectionIds[i];
            var section = document.getElementById(sectionId);
            var link = document.getElementById(sectionId + "-link");

            if (!section) {
                console.error("Section with ID " + sectionId + " not found.");
                continue;
            }

            if (isInViewport(section)) {
                link.style.textDecoration = "underline";
            } else {
                link.style.textDecoration = "none";
            }
        }
    }

    // Function to check if a section is in the viewport
    function isInViewport(element) {
        var bounding = element.getBoundingClientRect();
        return (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Call the underlineCurrentLink function on page load and scroll
    window.addEventListener("load", function() {
        underlineCurrentLink();
        footerVisibility();
    });
    window.addEventListener("scroll", function() {
        underlineCurrentLink();
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
