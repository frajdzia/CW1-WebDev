document.addEventListener("DOMContentLoaded", function() {
    var footer = document.getElementById('footer');
    var mainContent = document.querySelector('main');

    window.addEventListener('scroll', function() {
        // If scrolled to the bottom
        if ((window.innerHeight + window.scrollY) >= mainContent.offsetHeight) {
            footer.style.display = 'block';
        } else {
            footer.style.display = 'none';
        }
    });
});
