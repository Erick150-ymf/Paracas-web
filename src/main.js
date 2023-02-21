// ingresar al link de la imagen desktop
let thumbailsImage1 = document.getElementById('i1');
let thumbailsImage2 = document.getElementById('i2');
let thumbailsImage3 = document.getElementById('i3');
let thumbailsImage4 = document.getElementById('i4');
let thumbailsImage5 = document.getElementById('i5');
let thumbailsImage6 = document.getElementById('i6');
let thumbailsImage7 = document.getElementById('i7');

thumbailsImage1.addEventListener('click', function() {
    location.href = "../tours/ballestas.html"
});
thumbailsImage2.addEventListener('click', function() {
    location.href = "../tours/playas-reserva.html"
});
thumbailsImage3.addEventListener('click', function() {
    location.href = "../tours/dunas.html"
});
thumbailsImage4.addEventListener('click', function() {
    location.href = "../tours/ica.html"
});
thumbailsImage5.addEventListener('click', function() {
    location.href = "../tours/nazca.html"
});
thumbailsImage6.addEventListener('click', function() {
    location.href = "../tours/full-day.html"
});
thumbailsImage7.addEventListener('click', function() {
    location.href = "../tours/sanboarding.html"
});

// Ingresar al link de la imagen en mobile

let img1 = document.querySelector ('#im1');
let img2 = document.querySelector ('#im2');
let img3 = document.querySelector ('#im3');
let img4 = document.querySelector ('#im4');
let img5 = document.querySelector ('#im5');
let img6 = document.querySelector ('#im6');
let img7 = document.querySelector ('#im7');

img1.addEventListener('click', function() {
    location.href = "../tours/ballestas.html"
});
img2.addEventListener('click', function() {
    location.href = "../tours/playas-reserva.html"
});
img3.addEventListener('click', function() {
    location.href = "../tours/dunas.html"
});
img4.addEventListener('click', function() {
    location.href = "../tours/ica.html"
});
img5.addEventListener('click', function() {
    location.href = "../tours/nazca.html"
});
img6.addEventListener('click', function() {
    location.href = "../tours/full-day.html"
});
img7.addEventListener('click', function() {
    location.href = "../tours/sanboarding.html"
});

// Animaciones
new TypeIt(".About__title", {
    strings: "Visita Paracas",
}).go();
new TypeIt(".About__paragraph", {
    strings: "El tiempo es corto, disfruta la vida...",
}).go();

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