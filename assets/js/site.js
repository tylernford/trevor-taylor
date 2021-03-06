//
// Site Scripts
//

// ---------------------------------------------------------------------------
// Site Menu Toggle
var nav_open_btn  = document.querySelector('.js--site-menu__btn');
var nav_close_btn = document.querySelector('.js--site-menu__close-btn');
var nav           = document.querySelector('.site-menu__container');
var html          = document.querySelector('html');
var body          = document.querySelector('body');

nav_open_btn.onclick = function(){
   nav.classList.add('--is-visible');
   html.classList.add('--noScroll');
   body.classList.add('--noScroll');

   // Disable Menu Scroll on Mobile
   var fixed = document.querySelector('.site-menu__container');

   fixed.addEventListener('touchmove', function(e) {

      e.preventDefault();

   }, false);
};

nav_close_btn.onclick = function() {
   nav.classList.remove('--is-visible');
   html.classList.remove('--noScroll');
   body.classList.remove('--noScroll');
};


// ---------------------------------------------------------------------------
// Reveal Back to Top Button
var scrollPosition = window.scrollY;
var nav_wrap = document.getElementById('js--back-to-top__btn');

window.addEventListener('scroll', function() {
   scrollPosition = window.scrollY;

   if (scrollPosition >= 120) {
      nav_wrap.classList.add('--active');
   } else {
      nav_wrap.classList.remove('--active');
   }
});