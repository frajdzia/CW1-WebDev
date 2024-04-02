document.addEventListener("DOMContentLoaded", function() {
    const footer = document.getElementById('footer');
    const navLinks = document.querySelectorAll("nav ul li a");
    const mainContent = document.querySelector('main');
    const sitename = document.getElementById("sitename");
    const navbar = document.querySelector("nav");


    //minimises nav bar size when scrolling down and 
    //returns back to normal when scrolled up
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

    //shows footer
    function footerVisibility() {
        if ((window.innerHeight + window.scrollY) >= mainContent.offsetHeight) {
            footer.style.display = 'block';
        } else {
            footer.style.display = 'none';
        }
    }

    //when scrolling executes footer and navigation bar visibility
    window.onscroll = function() {
        scrollFunction();
        footerVisibility();
    };
    
    setupEventListeners();


    //sets the active page to be underlined (underline works with css)
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('nav a');
    const menuLength = menuItem.length;

    for (let i = 0; i < menuLength; i++) {
        if(menuItem[i].href === currentLocation) {
            menuItem[i].className = "active";
        }
    }


//make the content page references centered
document.querySelectorAll('.sidenav a').forEach(link => {
    link.addEventListener('click', function(e) {
        //prevent defualt
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            
            //getting the offset to add up to scroll and calc the position to scroll to
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

//check if buttons clicked
function setupEventListeners() {

    //initially hides displayInfo
    const displayInfo = document.getElementById('displayInfo');
    if (displayInfo) {
        displayInfo.style.display = 'none';
    }

    //shows confirmation popup with data provided
    const viewFormButton = document.getElementById('viewFrom');
    if (viewFormButton) {
        viewFormButton.addEventListener('click', submitForm);
    }

    //when clicked it goes back to form to reedit its content
    const editButton = document.querySelector('.editButton');
    if (editButton) {
        editButton.addEventListener('click', function () {
            if (displayInfo) {
                displayInfo.style.display = 'none';
            }
        });
    }

    //submit button that shows thanks and gets you to openEmailClient function
    const submitButton = document.querySelector('.submitButton');
    if (submitButton) {
        submitButton.addEventListener('click', openEmailClient);
    }
}

    // getting elements from local storage
    let storedName = localStorage.getItem('name');
    let storedEmail = localStorage.getItem('email');
    let storedVisited = localStorage.getItem('visited');
    let storedNavigation = localStorage.getItem('navigation');
    let storedSuggestions = localStorage.getItem('suggestions');
    let storedSatisfaction = localStorage.getItem('satisfaction');
    let storedUpdates = localStorage.getItem('updates');
    let storedQuestions = localStorage.getItem('questions');

    //Checking if elements exist before using them
    if (storedName != null) {
        if (document.getElementById('storedName')) {
            document.getElementById('storedName').textContent = storedName;
        }
        if (document.getElementById('storedEmail')) {
            document.getElementById('storedEmail').textContent = storedEmail;
        }
        if (document.getElementById('storedVisited')) {
            document.getElementById('storedVisited').textContent = storedVisited;
        }
        if (document.getElementById('storedNavigation')) {
            document.getElementById('storedNavigation').textContent = storedNavigation;
        }
        if (document.getElementById('storedSuggestions')) {
            document.getElementById('storedSuggestions').textContent = storedSuggestions;
        }
        if (document.getElementById('storedSatisfaction')) {
            document.getElementById('storedSatisfaction').textContent = storedSatisfaction;
        }
        if (document.getElementById('storedUpdates')) {
            document.getElementById('storedUpdates').textContent = storedUpdates;
        }
        if (document.getElementById('storedQuestions')) {
            document.getElementById('storedQuestions').textContent = storedQuestions;
        }
    }
    

function submitForm(event) {
    event.preventDefault();

    //collecting feedback data
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let visited = document.querySelector('input[name="visited"]:checked');
    let navigation = document.querySelector('input[name="navigation"]:checked');
    let satisfaction = document.querySelector('input[name="satisfaction"]:checked');
    let suggestions = document.getElementById('suggestions').value.trim();
    let updates = document.querySelector('select[name="updates"]').value.trim();
    let questions = document.getElementById('questions').value.trim();

    // form validation
    if (name === '' || email === '' || !visited || !navigation || satisfaction === '' || updates === '') {
        alert('Please fill in all required fields.');
        return;
    }

    //name validation (only letters)
    let namePattern = /^[a-zA-Z\s\'\-]+$/;
    if (!namePattern.test(name)) {
        alert('Please enter a valid name.');
        return;
    }

    // Email validation
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

    // display provided information
    document.getElementById('storedName').textContent = name;
    document.getElementById('storedEmail').textContent = email;
    document.getElementById('storedVisited').textContent = visited.value;
    document.getElementById('storedNavigation').textContent = navigation.value;
    document.getElementById('storedSatisfaction').textContent = satisfaction.value;
    document.getElementById('storedUpdates').textContent = updates;
    document.getElementById('storedSuggestions').textContent = suggestions;
    document.getElementById('storedQuestions').textContent = questions;

    // display confirmation popup
    document.getElementById('displayInfo').style.display = 'block'; 
}

// function that shows thanks popup and hides form and confirmation popups
function showThanks(){

    //hide the feedback form and any displayed confirmation

    document.getElementById('feedback_form').style.display = 'none';
    document.getElementById('displayInfo').style.display = 'none';
    document.getElementById('feedbackConfirmation').style.display = 'block';
}


function openEmailClient() {

    //shows thanks popup after sending feedback form
    showThanks()

    // retrieves feedback data stored in the browser's local storage
    let storedName = localStorage.getItem('name');
    let storedEmail = localStorage.getItem('email');
    let visited = localStorage.getItem('visited');
    let navigation = localStorage.getItem('navigation');
    let suggestions = localStorage.getItem('suggestions');
    let satisfaction = localStorage.getItem('satisfaction');
    let updates = localStorage.getItem('updates');
    let questions = localStorage.getItem('questions');

    //goes to email
    let mailtoLink = `mailto:${storedEmail}?subject=Feedback&body=Hello, here is feedback data you have provided.%0D%0AName: ${storedName}%0D%0AEmail: ${storedEmail}%0D%0AWas this your first time visiting: ${visited}%0D%0AWas this website informative and easy to navigate through: ${navigation}%0D%0AImprovement suggestions: ${suggestions}%0D%0ASatisfaction scale (1-10): ${satisfaction}%0D%0AUpdates: ${updates}%0D%0AAdditional questions or requests: ${questions}`; 

    // open the constructed mailto
    window.open(mailtoLink);

}

// smoothly scrolls to the top
function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}