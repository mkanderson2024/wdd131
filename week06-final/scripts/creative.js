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
const bases = [
    {
        buildName: "Rover Test Facility",
        purpose: "Create better rovers",
        type: "World",
        imageURL:
            "https://steamuserimages-a.akamaihd.net/ugc/1770449977198291637/71BE11531A13B882FA5861818C590502F58B8406/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    },
    {
        buildName: "IFMN Encounter Mod",
        purpose: "Add encounters to the game",
        type: "Mod",
        imageURL:
            "https://steamuserimages-a.akamaihd.net/ugc/2017093333330216733/3D174DFC7A5AC5EAE23801D57FC8FBC1DD0A816C/?imw=268&imh=151&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    },
    {
        buildName: "IECN Encounter Mod",
        purpose: "Add encounters to the game",
        type: "Mod",
        imageURL:
            "https://steamuserimages-a.akamaihd.net/ugc/2017093333342405439/E39851BE8E543D3F83797AF44BF47C22A3A0210B/?imw=268&imh=151&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    }
];

createAquaticCard(bases);

function createAquaticCard(filteredBuild) {
    filteredBuild.forEach(build => {
        let card = document.createElement("section");
        let name = document.createElement("h4");
        let purpose = document.createElement("p")
        let type = document.createElement("p")
        let img = document.createElement("img")

        name.innerHTML = `${build.buildName}`;
        purpose.innerHTML = `<span class="label">Purpose:</span> ${build.purpose}`;
        type.innerHTML = `<span class="label">Armor:</span> ${build.type}`;
        img.setAttribute("src", build.imageURL);
        img.setAttribute("alt", `${build.buildName} Creative Items`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "200");
        img.setAttribute("height", "150")

        card.appendChild(name);
        card.appendChild(purpose);
        card.appendChild(type);
        card.appendChild(img);

        document.querySelector(".creative-container").appendChild(card);
    });
}