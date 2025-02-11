//-------Copyright Date Script-------
const date = new Date;
const year = document.getElementById("copyright-year");

year.innerHTML += date.getFullYear();

//Last Modified Script
const modified = document.getElementById("lastModified");
let lastModified = new Date(document.lastModified);
modified.innerHTML += lastModified;

//Form script
const products = [
    {
        id: "Aircraft",
        name: "Aircraft",
        averagerating: 1
    },
    {
        id: "Aquatic",
        name: "Navalcraft",
        averagerating: 1
    },
    {
        id: "Bases",
        name: "Bases",
        averagerating: 1
    },
    {
        id: "Creative",
        name: "World/Mod",
        averagerating: 1
    },
    {
        id: "Space",
        name: "Spaceship",
        averagerating: 1
    },
    {
        id: "Vehicles",
        name: "Vehicles",
        averagerating: 1
    }
];

const parentElement = document.getElementById("products");

for (let i = 0; i < products.length; i++) {
    const newElement = document.createElement("option");
    newElement.textContent = (products[i].name).toUpperCase();
    parentElement.appendChild(newElement);
};