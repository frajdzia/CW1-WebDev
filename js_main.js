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
});


// from here we work gg


window.onload = function() {
    document.getElementById('displayInfo').style.display = 'none';

    document.getElementById('submit').addEventListener('click', submitForm);

    document.querySelector('.editButton').addEventListener('click', function () {
        document.getElementById('displayInfo').style.display = 'none';
    });

    document.querySelector('.submitButton').addEventListener('click', openEmailClient);
};

    // 

    let storedName = localStorage.getItem('name');
    let storedEmail = localStorage.getItem('email');
    let storedVisited = localStorage.getItem('visited');
    let storedNavigation = localStorage.getItem('navigation');

    let storedSuggestions = localStorage.getItem('suggestions');
    let storedSatisfaction = localStorage.getItem('satisfaction');
    let storedUpdates = localStorage.getItem('updates');
    let storedQuestions = localStorage.getItem('questions');

    //

    if (storedName !== null) {
        document.getElementById('storedName').textContent = storedName;
        document.getElementById('storedEmail').textContent = storedEmail;
        document.getElementById('storedVisited').textContent = storedVisited;
        document.getElementById('storedNavigation').textContent = storedNavigation;

        document.getElementById('storedSuggestions').textContent = storedSuggestions;
        document.getElementById('storedSatisfaction').textContent = storedSatisfaction;
        document.getElementById('storedUpdates').textContent = storedUpdates;
        document.getElementById('storedQuestions').textContent = storedQuestions;
    }


// 

function submitForm(event) {
    event.preventDefault();

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let visited = document.querySelector('input[name="visited"]:checked');
    let navigation = document.querySelector('input[name="navigation"]:checked');
    let satisfaction = document.querySelector('input[name="satisfaction"]:checked');

    let suggestions = document.getElementById('suggestions').value.trim();
    let updates = document.querySelector('select[name="updates"]').value.trim();
    let questions = document.getElementById('questions').value.trim();

    // Form validation
    if (name === '' || email === '' || !visited || !navigation || satisfaction === '' || updates === '') {
        alert('Please fill in all required fields.');
        return;
    }

    let namePattern = /^[a-zA-Z\s\'\-]+$/;
    if (!namePattern.test(name)) {
        alert('Please enter a valid name.');
        return;
    }

    // Email validation using a simple regular expression
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Store form data in local storage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('visited', visited.value);
    localStorage.setItem('navigation', navigation.value);
    localStorage.setItem('satisfaction', satisfaction.value);
    localStorage.setItem('updates', updates);
    localStorage.setItem('suggestions', suggestions);
    localStorage.setItem('questions', questions);

    // Display the submitted information
    document.getElementById('storedName').textContent = name;
    document.getElementById('storedEmail').textContent = email;
    document.getElementById('storedVisited').textContent = visited.value;
    document.getElementById('storedNavigation').textContent = navigation.value;
    document.getElementById('storedSatisfaction').textContent = satisfaction.value;
    document.getElementById('storedUpdates').textContent = updates;
    document.getElementById('storedSuggestions').textContent = suggestions;
    document.getElementById('storedQuestions').textContent = questions;

    // Display the confirmation message
    document.getElementById('displayInfo').style.display = 'block'; 
}

function openEmailClient() {
    let storedName = localStorage.getItem('name');
    let storedEmail = localStorage.getItem('email');
    let visited = localStorage.getItem('visited');
    let navigation = localStorage.getItem('navigation');
    let suggestions = localStorage.getItem('suggestions');
    let satisfaction = localStorage.getItem('satisfaction');
    let updates = localStorage.getItem('updates');
    let questions = localStorage.getItem('questions');

    document.getElementById('feedback_form').style.display = 'none';
    document.getElementById('displayInfo').style.display = 'none';

    document.getElementById('feedbackConfirmation').style.display = 'block';
    // to change
    //let mailtoLink = `mailto:munteancorina@proton.me?subject=Feedback&body=Name: ${storedName}%0D%0AEmail: ${storedEmail}%0D%0AFirst Time Visiting: ${visited}%0D%0ANavigation Experience: ${navigation}%0D%0AImprovements: ${suggestions}%0D%0ARating: ${satisfaction}%0D%0AServices Recommended: ${updates}%0D%0AAdditional Questions/Requests: ${questions}`; 
/////

    window.open(mailtoLink);

    document.getElementById('feedback_form').style.display = 'none';
    document.getElementById('displayInfo').style.display = 'none';

    document.getElementById('feedbackConfirmation').style.display = 'block';
}