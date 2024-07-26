let testimonials = [
    {
        company: {
            image: 'img/index/icon/ibm-logo.svg'
        },
        text: 'Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.',
        customer: {
            name: 'Organize Across',
            position: 'Ui designer',
            image: 'img/index/customer-avatar.png'
        }
    },
    {
        company: {
            image: 'img/index/icon/ibm-logo.svg'
        },
        text: 'Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.',
        customer: {
            name: 'Organize Across',
            position: 'Ui designer',
            image: 'img/index/customer-avatar.png'
        }
    },
    {
        company: {
            image: 'img/index/icon/ibm-logo.svg'
        },
        text: 'Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.',
        customer: {
            name: 'Organize Across',
            position: 'Ui designer',
            image: 'img/index/customer-avatar.png'
        }
    },
];

const testimonialsContainer = document.querySelector('.testimonials__list');

function generateTestimonial({company, text, customer}) {
    return `
        <li class="testimonials-list__testimonial-item testimonial-item">
            ${generateCompany(company)}
            <p class="testimonial-item__comment">${text}</p>
            ${generateCustomer(customer)}
        </li>`;
}

function generateCompany({image}) {
    return `<img
                class="testimonial-item__company-image"
                src="${image}"
                alt="Company Image"
            />`;
}

function generateCustomer({image, name, position}) {
    return `
        <div class="testimonial-item__customer testimonial-customer">
            <img
                class="testimonial-customer__avatar"
                src="${image}"
                alt="Customer Avatar"
            />
            <div>
                <p class="testimonial-customer__name">${name}</p>
                <p class="testimonial-customer__position">${position}</p>
            </div>
        </div>`;
}

function insertTestimonials(testimonials) {
    testimonialsContainer.innerHTML = '';

    for (let testimonial of testimonials) {
        testimonialsContainer.innerHTML += generateTestimonial(testimonial);
    }
}

insertTestimonials(testimonials);