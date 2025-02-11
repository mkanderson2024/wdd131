//-------Copyright Date Script-------
const date = new Date;
const year = document.getElementById("copyright-year");

year.innerHTML += date.getFullYear();

//Last Modified Script
const modified = document.getElementById("lastModified");
let lastModified = new Date(document.lastModified);
modified.innerHTML += lastModified;

//-------Hamburger Button Script -------

const hambutton = document.querySelector('#menu');
const mainnav = document.querySelector('.navigation');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

//--------Title Change During Screensize Change-------
const mediaQuery = window.matchMedia('(max-width: 1200px)');

function handleMediaChange(event) {
    if (event.matches) {
        // Actions to perform when the media query matches (e.g., screen is 700 px or less)
        console.log('Changes Title To IEC');
        const h1Element = document.querySelector('h1');
        // Change the text using textContent
        h1Element.textContent = 'IEC';
    } else {
        // Actions to perform when the media query does not match (e.g., screen is larger than 768px)
        console.log('Changes Title to Interplanetary Enforcemnet Corps');
        const h1Element = document.querySelector('h1');
        // Change the text using textContent
        h1Element.textContent = 'Interplanetary Enforcemnet Corps';
    }
}

// Attach the event listener
mediaQuery.addEventListener('change', handleMediaChange);

// Initial check to run the function on page load)
handleMediaChange(mediaQuery);

//--------- Lists ----------
const vehicles = [
    {
        vehicleName: "IEC Intrepidus",
        pcu: "63300",
        armor: "Heavy",
        power: "Battery/Reactor",
        imageURL:
            "https://steamuserimages-a.akamaihd.net/ugc/934938005825922339/9DCAE6B56E5807840521F79FC02382284E21CD0A/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    }
];

createAquaticCard(spaceships);

function createAquaticCard(filteredSpacships) {
    filteredSpacships.forEach(spaceship => {
        let card = document.createElement("section");
        let name = document.createElement("h4");
        let pcu = document.createElement("p")
        let armor = document.createElement("p")
        let power = document.createElement("p")
        let img = document.createElement("img")

        name.innerHTML = `${spaceship.spaceshipName}`;
        pcu.innerHTML = `<span class="label">PCU:</span> ${spaceship.pcu}`;
        armor.innerHTML = `<span class="label">Armor:</span> ${spaceship.armor}`;
        power.innerHTML = `<span class="label">Power:</span> ${spaceship.power}`;
        img.setAttribute("src", spaceship.imageURL);
        img.setAttribute("alt", `${spaceship.spaceshipName} Spaceships`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "200");
        img.setAttribute("height", "150")

        card.appendChild(name);
        card.appendChild(pcu);
        card.appendChild(armor);
        card.appendChild(power);
        card.appendChild(img);

        document.querySelector(".space-container").appendChild(card);
    });
}