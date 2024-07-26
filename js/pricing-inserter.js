let prices = [
    {
        name: 'FREE',
        description: 'Organize across all apps by hand',
        price: 0,
        currency: '$',
        frequency: 'Per Month',
        features: [
            'Pricing Feature',
            'Pricing Feature',
            'Pricing Feature',
            'Pricing Feature',
            'Pricing Feature',
        ],
        highlighted: false
    },
    {
        name: 'STANDARD',
        description: 'Organize across all apps by hand',
        price: 10,
        currency: '$',
        frequency: 'Per Month',
        features: [
            'Pricing Feature',
            'Pricing Feature',
            'Pricing Feature',
            'Pricing Feature',
            'Pricing Feature',
        ],
        highlighted: true
    },
    {
        name: 'BUSINESS',
        description: 'Organize across all apps by hand',
        price: 99,
        currency: '$',
        frequency: 'Per Month',
        features: [
            'Pricing Feature',
            'Pricing Feature',
            'Pricing Feature',
            'Pricing Feature',
            'Pricing Feature',
        ],
        highlighted: false
    },
];

const pricingContainer = document.querySelector('.pricing__variants');

function generatePricingVariant({name, 
                                description, 
                                price, 
                                currency, 
                                frequency, 
                                features, 
                                highlighted}) {
    return `
        <div class="pricing-variants__variant pricing-variant ${highlighted ? 'pricing-variants__variant--accent' : ''}">
        <h5 class="pricing-variant__title title-bold">${name}</h5>
        <p class="pricing-variant__paragraph">${description}</p>
        <div class="pricing-variant__price-container">
            <p class="pricing-variant__price">${price}</p>
            <div>
                <p class="pricing-variant__currency paragraph-bold">${currency}</p>
                <p class="pricing-variant__frequency">${frequency}</p>
            </div>
        </div>
        ${generatePricingFeatures(features)}
        <button class="pricing-variant__btn button button-text">
            Order Now
        </button>
      </div>`;
}

function generatePricingFeatures(features) {
    let featuresContainer = '<ul class="pricing-variant__features pricing-features">';

    for (let feature of features) {
        featuresContainer += `
            <li class="pricing-features__feature">
                <p>${feature}</p>
            </li>`;
    }

    return featuresContainer + '</ul>';
}

function insertPricingVariants(prices) {
    pricingContainer.innerHTML = '';

    for (let price of prices) {
        pricingContainer.innerHTML += generatePricingVariant(price);
    }
}

insertPricingVariants(prices);