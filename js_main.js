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

//Check if name, email and updates are present
document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById('feedback_form');
    form.addEventListener('submit', function(event) {
        // Prevent the form from submitting 
        event.preventDefault();

        // Get the values of the fields
        var name = document.getElementById('name').value.trim();
        var email = document.getElementById('email').value.trim();
        var updates = document.getElementById('updates').value; 

        // Check if the fields are filled out
        if (name === '') {
            alert('Please fill out your name.');
            return false;
        }

        if (email === '') {
            alert('Please fill out your email address.');
            return false; 
        }

        
        if (updates === '') { 
            alert('Please select if you would like to receive updates.');
            return false; 
        }

        // If all checks pass, submit the form
        alert("Form submitted successfully ");
        form.submit();
    });
});

// Name and email validation for feedback
document.getElementById('feedback_form').addEventListener('submit', function(event) {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    // only allow letters
    let nameRegex = /^[a-zA-Z\s\'\-]+$/; 
    // basic email pattern
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the name input is valid
    if (!nameRegex.test(name)) {
        alert("Please enter a valid name. Names should only contain letters.");
        event.preventDefault(); // Prevent submission if not
        return false;
    }

    // Check if the email input is valid
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        event.preventDefault(); // Prevent submission if not
        return false;
    }

    // if both ifs pass then form will be submited
});
