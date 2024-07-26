const testimonialsContainer = document.querySelector('.testimonials__list');
const timeout = 5000;
const maxItems = testimonialsContainer.children.length;
let currentItem = 0;

function slide() {
    testimonialsContainer.style.left = `-${currentItem * 100}%`;
    currentItem = (currentItem + 1) % maxItems;
}

setInterval(slide, timeout);