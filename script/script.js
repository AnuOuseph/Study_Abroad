window.onscroll = function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.remove('transparent');
        navbar.classList.add('opaque');
    } else {
        navbar.classList.remove('opaque');
        navbar.classList.add('transparent');
    }
};