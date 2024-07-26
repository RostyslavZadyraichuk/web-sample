function init() {
    import("./header-nav.js");
    import("./partners-inserter.js");
    import("./testimonials-inserter.js");
    import("./testimonials-slider.js");
    import("./pricing-inserter.js");
}

const totalPartials = document.querySelectorAll('[hx-trigger="load"], [data-hx-trigger="load"]').length;
let loadedPartialsCount = 0;

document.body.addEventListener('htmx:afterOnLoad', () => {
    loadedPartialsCount++;
    if (loadedPartialsCount === totalPartials) {
        init();
    }
});