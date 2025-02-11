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
//Aircraft
const aircrafts = [
    {
        aircraftName: "IEC Hornet-C",
        pcu: "6116",
        armor: "Heavy",
        power: "Battery/Reactor",
        imageURL: "https://steamuserimages-a.akamaihd.net/ugc/2021597657835286280/CAD379665B7236DE1E014E739AD50A4CB017DB35/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
    },
    {
        aircraftName: "IEC Growler-C",
        pcu: "6413",
        armor: "Heavy",
        power: "Battery/Reactor",
        imageURL: "https://steamuserimages-a.akamaihd.net/ugc/2021597657835291913/6B9CACC274150B5BBB06B6CD4B3505527A9E327D/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    },
    {
        aircraftName: "IEC Brawler-C",
        pcu: "5218",
        armor: "Heavy",
        power: "Battery/Reactor",
        imageURL: "https://steamuserimages-a.akamaihd.net/ugc/2021597657835295224/960DF6B0EDCC3C4A75ECD2415C10896179E8D29E/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    },
    {
        aircraftName: "IEC Razor-C",
        pcu: "4494",
        armor: "Heavy",
        power: "Battery/Reactor",
        imageURL: "https://steamuserimages-a.akamaihd.net/ugc/2021597657835301600/315D5C0B4BAAED62CCF8AFDE3D56885303B0E866/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    },
    {
        aircraftName: "IEC Penetrator-C",
        pcu: "3828",
        armor: "Heavy",
        power: "Battery/Reactor",
        imageURL: "https://steamuserimages-a.akamaihd.net/ugc/2021597657835304355/DBB3986F3E06747A2341CEE74AFC8BA13E858279/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    },
    {
        aircraftName: "IEC Viper-C",
        pcu: "6274",
        armor: "Heavy",
        power: "Battery/Reactor",
        imageURL: "https://steamuserimages-a.akamaihd.net/ugc/2021597657835307985/FB584112876CA70199B132BE86F867583639F47A/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    },
    {
        aircraftName: "IEC Avenger-C",
        pcu: "9454",
        armor: "Heavy",
        power: "Battery/Reactor",
        imageURL: "https://steamuserimages-a.akamaihd.net/ugc/2021597657835312330/66C155A5C33F4FFB7184FD689809CED642B5E490/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    },
    {
        aircraftName: "IEC Defender-C",
        pcu: "8801",
        armor: "Heavy",
        power: "Battery/Reactor",
        imageURL: "https://steamuserimages-a.akamaihd.net/ugc/2021597657835314969/F3A78AA52087096C7FA4009640CF68AD6F3CD7F1/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    }
];

let containerAircraft = ".aircaft-container"
createAircraftCard(aircrafts);

function createAircraftCard(filteredAircraft, containerName) {
    filteredAircraft.forEach(aircraft => {
        let card = document.createElement("section");
        let name = document.createElement("h4");
        let pcu = document.createElement("p")
        let armor = document.createElement("p")
        let power = document.createElement("p")
        let img = document.createElement("img")

        name.innerHTML = `${aircraft.aircraftName}`;
        pcu.innerHTML = `<span class="label">PCU:</span> ${aircraft.pcu}`;
        armor.innerHTML = `<span class="label">Armor:</span> ${aircraft.armor}`;
        power.innerHTML = `<span class="label">Power:</span> ${aircraft.power}`;
        img.setAttribute("src", aircraft.imageURL);
        img.setAttribute("alt", `${aircraft.aircraftName} Aircraft`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "200");
        img.setAttribute("height", "150")

        card.appendChild(name);
        card.appendChild(pcu);
        card.appendChild(armor);
        card.appendChild(power);
        card.appendChild(img);

        document.querySelector(".aircaft-container").appendChild(card);
    })
}
//Aquatic


const navalcrafts = [
    {
        navalcraftName: "IEC Lance Destroyer",
        pcu: "9728",
        armor: "Heavy",
        power: "Battery/Reactor",
        imageURL:
            "https://steamuserimages-a.akamaihd.net/ugc/1863954474570501586/7DA40E12B4E54C34191B7689D8B61D20000C99F4/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    }
];

createAquaticCard(navalcrafts);

function createAquaticCard(filteredNavalcraft) {
    filteredNavalcraft.forEach(navalcraft => {
        let card = document.createElement("section");
        let name = document.createElement("h4");
        let pcu = document.createElement("p")
        let armor = document.createElement("p")
        let power = document.createElement("p")
        let img = document.createElement("img")

        name.innerHTML = `${navalcraft.navalcraftName}`;
        pcu.innerHTML = `<span class="label">PCU:</span> ${navalcraft.pcu}`;
        armor.innerHTML = `<span class="label">Armor:</span> ${navalcraft.armor}`;
        power.innerHTML = `<span class="label">Power:</span> ${navalcraft.power}`;
        img.setAttribute("src", navalcraft.imageURL);
        img.setAttribute("alt", `${navalcraft.navalcraftName} Aircraft`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "200");
        img.setAttribute("height", "150")

        card.appendChild(name);
        card.appendChild(pcu);
        card.appendChild(armor);
        card.appendChild(power);
        card.appendChild(img);

        document.querySelector(".aquatic-container").appendChild(card);

    });
}