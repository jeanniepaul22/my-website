// script.js
window.onscroll = function() {
    document.getElementById("backToTop").style.display = window.pageYOffset > 100 ? "block" : "none";
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
