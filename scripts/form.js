//Date last modified and Copyright year
const date = new Date;
const year = document.getElementById("copyright-year");

year.innerHTML += date.getFullYear();

const modified = document.getElementById("lastModified");
let lastModified = new Date(document.lastModified);
modified.innerHTML += lastModified;

// const button = document.querySelector('click', function);

// function CheckBoxRequired{

// }

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

const parentElement = document.getElementById("products");

// let htmlContent = "";

// for (let i = 0; i < products.length; i++) {
//     const value = (products[i].name);
//     htmlContent += `<option>${value}</option>`
//     document.getElementById("products").appendChild;
// }
for (let i = 0; i < products.length; i++) {
    const newElement = document.createElement("option");
    newElement.textContent = (products[i].name);
    parentElement.appendChild(newElement);
}

// options.innerHTML = htmlContent;
// }