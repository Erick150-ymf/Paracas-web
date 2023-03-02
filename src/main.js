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

// link inicio

let Logo = document.querySelector('.header__logo');

Logo.addEventListener('click', function () {
    location.href = './index.html'
})
