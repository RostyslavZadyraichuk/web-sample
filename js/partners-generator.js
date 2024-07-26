let partners = [
    {
        name: 'Partner Name',
        image: 'img/index/partner-google.svg'
    },
    {
        name: 'Partner Name',
        image: 'img/index/partner-amazon.png'
    },
    {
        name: 'Partner Name',
        image: 'img/index/partner-microsoft.png'
    },
    {
        name: 'Partner Name',
        image: 'img/index/partner-uber.png'
    },
    {
        name: 'Partner Name',
        image: 'img/index/partner-dropbox.png'
    },
    {
        name: 'Partner Name',
        image: 'img/index/partner-google.svg'
    },
    {
        name: 'Partner Name',
        image: 'img/index/partner-uber.png'
    },
    {
        name: 'Partner Name',
        image: 'img/index/partner-amazon.png'
    },
];

const partnersContainer = document.querySelector('.partners__list');

function generatePartner({name, image}) {
    return `
        <li class="partners-list__partner-item partner-item">
            <p class="partner-item__partner-name">${name}</p>
            <img
                class="partner-item__partner-image"
                src="${image}"
                alt="${name} Image"
            />
        </li>`;
}

function insertPartners(partners) {
    partnersContainer.innerHTML = '';

    for (let partner of partners) {
        partnersContainer.innerHTML += generatePartner(partner);
    }
}

insertPartners(partners);