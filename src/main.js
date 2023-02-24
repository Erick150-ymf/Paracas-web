// Modal navbar
let openModal = document.querySelector('.header__menu');
let closeModal = document.querySelector('.modal-navbar__close-icon');
let modalBackground = document.querySelector('.modal-navbar__background');
let modal = document.querySelector('.modal-navbar');

openModal.addEventListener('click',() => {
    modalBackground.style.display = 'block';
    modal.style.animation = 'abrir 0.5s';
});

closeModal.addEventListener('click', () => {
    modalBackground.style.display = 'none';
});

// Funcion de politicas de privacidad
function showPolicy() {
    policywnd = window.open('http://www.parkingcrew.net/privacy.html', 'pcrew_policy', 'width=890,height=330,left=200,top=200,menubar=no,status=yes,toolbar=no'); policywnd.focus();
}

// mapa

function initMap() {
    // The location of Uluru
    const uluru = { lat: -13.830900581281764, lng: -76.24657158154407 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 17,
        center: uluru,
    });
        // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}

window.initMap = initMap;