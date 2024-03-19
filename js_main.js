document.addEventListener("DOMContentLoaded", function() {
    var footer = document.getElementById('footer');
    window.addEventListener('scroll', function() {
        // If scrolled to the bottom
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            footer.style.display = 'block';
        } else {
            footer.style.display = 'none';
        }
    });
});