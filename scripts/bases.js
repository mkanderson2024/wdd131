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
        buildName: "IEC Enforcius Base",
        pcu: "23160",
        armor: "Heavy",
        power: "Battery/Reactor",
        imageURL:
            "https://steamuserimages-a.akamaihd.net/ugc/964229794248916135/776695F6280B83EB3D5D2375AF5BE4995C44992D/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    },
    {
        buildName: "IEC EPB Reactor Module",
        pcu: "",
        armor: "Light",
        power: "Battery/Reactor",
        imageURL:
            "https://steamuserimages-a.akamaihd.net/ugc/964229794248854252/058DC5EC3C5C4F5DC901E5F6E1FCCEC62A0CC8B8/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    },
    {
        buildName: "IEC EPB Barracks Module",
        pcu: "",
        armor: "Light",
        power: "Battery/Reactor",
        imageURL:
            "https://steamuserimages-a.akamaihd.net/ugc/964229794248952878/7544A75AC7812524F5267456C2371C566352D4B1/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    },
    {
        buildName: "IEC EPB Refining Module",
        pcu: "",
        armor: "Light",
        power: "Battery/Reactor",
        imageURL:
            "https://steamuserimages-a.akamaihd.net/ugc/964229794248857459/ACEF6D4219D884063E47331B6BA067B893AEA9EA/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    },
    {
        buildName: "IEC EPB Supply Module",
        pcu: "",
        armor: "Light",
        power: "Battery/Reactor",
        imageURL:
            "https://steamuserimages-a.akamaihd.net/ugc/964229794248859491/C75ECC371AB1BE0C9593BC4D1A830A5A00945D78/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    },
    {
        buildName: "IEC EPB Landing Pad",
        pcu: "",
        armor: "Light",
        power: "Battery/Reactor",
        imageURL:
            "https://steamuserimages-a.akamaihd.net/ugc/1483325035911649120/4CF7F7AFEB77FC9E9C635FFEB4C74D53FEEAEEF4/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    },
    {
        buildName: "IEC Planetary Base Start",
        pcu: "",
        armor: "Light",
        power: "Battery/Reactor",
        imageURL:
            "https://steamuserimages-a.akamaihd.net/ugc/796491922835858361/F8A54726E220C02C2AF784EDAC03D2FC5BA45670/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    },
    {
        buildName: "IEC Angelius Base",
        pcu: "91013",
        armor: "Light",
        power: "Battery/Reactor",
        imageURL:
            "https://steamuserimages-a.akamaihd.net/ugc/977739325629197401/DAB02025B706ED9BFFA282E640ABF43483AC8B06/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    }
];

createAquaticCard(bases);

function createAquaticCard(filteredBuild) {
    filteredBuild.forEach(build => {
        let card = document.createElement("section");
        let name = document.createElement("h4");
        let pcu = document.createElement("p")
        let armor = document.createElement("p")
        let power = document.createElement("p")
        let img = document.createElement("img")

        name.innerHTML = `${build.buildName}`;
        pcu.innerHTML = `<span class="label">PCU:</span> ${build.pcu}`;
        armor.innerHTML = `<span class="label">Armor:</span> ${build.armor}`;
        power.innerHTML = `<span class="label">Power:</span> ${build.power}`;
        img.setAttribute("src", build.imageURL);
        img.setAttribute("alt", `${build.buildName} Base`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "200");
        img.setAttribute("height", "150")

        card.appendChild(name);
        card.appendChild(pcu);
        card.appendChild(armor);
        card.appendChild(power);
        card.appendChild(img);

        document.querySelector(".bases-container").appendChild(card);
    });
}