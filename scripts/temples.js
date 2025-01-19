const date = new Date;
const year = document.getElementById("copyright-year");

year.innerHTML += date.getFullYear();

const modified = document.getElementById("lastModified");
let lastModified = new Date(document.lastModified);
modified.innerHTML += lastModified;

const hambutton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hambutton.addEventListener('click', () => {
    navigation.classList.toggle('show');
    hambutton.classList.toggle('show');
});