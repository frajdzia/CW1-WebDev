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

    const form = document.getElementById('feedback_form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting immediately

        let isValid = true;
        let messages = [];
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const updates = document.getElementById('updates').value; 
        const nameRegex = /^[a-zA-Z\s\'\-]+$/; 
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (name === '' || !nameRegex.test(name)) {
            messages.push('Please enter a valid name. Names should only contain letters.');
            isValid = false;
        }

        if (email === '' || !emailRegex.test(email)) {
            messages.push("Please enter a valid email address.");
            isValid = false;
        }

        if (updates === '') { 
            messages.push('Please select if you would like to receive updates.');
            isValid = false;
        }

        if (!isValid) {
            alert(messages.join('\n'));
        } else {
            alert("Form submitted successfully");
            form.submit(); // Uncomment this line to enable form submission after validation
        }
    });
});

// Smoothly scrolls to the top
function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}
//Make the content page references centered
document.querySelectorAll('.sidenav a').forEach(link => {
    link.addEventListener('click', function(e) {
        //prevent defualt
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            
            //Getting the offset to add up to scroll and calc the position to scroll to
            // 100 works the best for me
            const offset = 100; 
            const topPos = targetElement.offsetTop - offset;

            window.scrollTo({
                top: topPos,
                behavior: 'smooth'
            });
        }
    });
});