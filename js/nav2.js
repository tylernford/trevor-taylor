/* Toggle open class to menu button on click */
(function() {

    function transformStart() {
        document.querySelector("#menu").classList.toggle("js-closed");
    }
    function transformStart() {
        document.querySelector("#menu").classList.toggle("js-open");
    }

    document.querySelector("#menu").addEventListener("click", transformStart);
})();
