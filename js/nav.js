/* Show/hide nav */
(function() {

    function transformStart() {
        document.querySelector("#nav").classList.toggle("is-visible");
    }

    document.querySelector("#menu").addEventListener("click", transformStart);
    //document.querySelector("#nav-left").addEventListener("click", transformStart);
})();
