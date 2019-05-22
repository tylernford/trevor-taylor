//
// Site Scripts
//

// ---------------------------------------------------------------------------
// Site Menu Toggle
var nav_open_btn   = document.querySelector('.js--site-menu__btn');
var nav_close_btn = document.querySelector('.js--site-menu__close-btn');
var nav       = document.querySelector('.site-menu__container');

nav_open_btn.onclick = function(){
   nav.classList.add('--is-visible');
};

nav_close_btn.onclick = function() {
   nav.classList.remove('--is-visible');
};