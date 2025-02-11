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
const spaceships = [
    {
        spaceshipName: "IEC Intrepidus",
        pcu: "63300",
        armor: "Heavy",
        power: "Battery/Reactor",
        imageURL:
            "https://steamuserimages-a.akamaihd.net/ugc/934938005825922339/9DCAE6B56E5807840521F79FC02382284E21CD0A/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    },
    {
        spaceshipName: "IEC LZ-2 Fighter",
        pcu: "9194",
        armor: "Light",
        power: "Reactor/Hydrogen",
        imageURL:
            "https://steamuserimages-a.akamaihd.net/ugc/796495437835458820/90229B501464C0572BE768FB3155C73A7363DB0F/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
    },
    {
        spaceshipName: "IEC Fossa Heavy Cruiser",
        pcu: "24884",
        armor: "Heavy",
        power: "Reactor/Hydrogen",
        imageURL:
            "https://steamuserimages-a.akamaihd.net/ugc/2513654776355094785/27DB22297E2F4702AB493FDA4D88E318F1DE1429/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
    },
    {
        spaceshipName: "IEC LZZ-320 Fighter",
        pcu: "8920",
        armor: "Light",
        power: "Reactor/Hydrogen",
        imageURL:
            "https://steamusercontent-a.akamaihd.net/ugc/961974277960260825/45608733479D5C6CC366AC9FBCE7628D4CC9004E/?imw=268&imh=151&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    },
    {
        spaceshipName: "IEC Sharadin Mk2 Frigate",
        pcu: "8920",
        armor: "Heavy",
        power: "Reactor/Hydrogen",
        imageURL:
            "https://steamuserimages-a.akamaihd.net/ugc/2513654776365065917/6F8D794A03E61730BEA7CAED7738709D03372460/?imw=268&imh=151&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    },
    {
        spaceshipName: "IEC AR-S Fighter",
        pcu: "4002",
        armor: "Light",
        power: "Reactor/Hydrogen",
        imageURL:
            "https://steamuserimages-a.akamaihd.net/ugc/811121990161098885/04A0061AF23CF1B6432A2733A11C37BBED621808/?imw=268&imh=151&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    },
    {
        spaceshipName: "IEC Saborlite Fighter",
        pcu: "8948",
        armor: "Light",
        power: "Reactor/Hydrogen",
        imageURL:
            "https://steamuserimages-a.akamaihd.net/ugc/797618198574314309/7241A3549E3512371A0A53B727D67176A15BDAC5/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    },
    {
        spaceshipName: "IEC Sovereignia Mk2",
        pcu: "159053",
        armor: "Light",
        power: "Reactor/Hydrogen",
        imageURL:
            "https://steamuserimages-a.akamaihd.net/ugc/2056511971416738668/520B6EFE096160D0517EEA9BF20601E9362D1EC2/?imw=268&imh=151&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
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