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
        vehicleName: "IEC Excelsius",
        pcu: "23180",
        armor: "Light",
        power: "Battery/Hydrogen",
        imageURL:
            "https://steamuserimages-a.akamaihd.net/ugc/2262557817140166585/492DCCCF2C47D2CB3E9BFF1D96C4322C2A4F5849/?imw=268&imh=151&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    },
    {
        vehicleName: "IEC Raptor",
        pcu: "2855",
        armor: "Heavy",
        power: "Battery/Hydrogen",
        imageURL:
            "https://steamuserimages-a.akamaihd.net/ugc/2263685880292456120/F4EDCA11233A0174E315A4EC751847B0BF546EE0/?imw=268&imh=151&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    },
    {
        vehicleName: "IEC Obsidian",
        pcu: "36720",
        armor: "Light",
        power: "Battery/Hydrogen",
        imageURL:
            "https://steamuserimages-a.akamaihd.net/ugc/2262562981875073959/28F95523CB469E7663AA5E213B7EB960AAA284AF/?imw=268&imh=151&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    },
    {
        vehicleName: "IEC Roaken MK2-HT",
        pcu: "4548",
        armor: "Heavy",
        power: "Battery/Hydrogen",
        imageURL:
            "https://steamuserimages-a.akamaihd.net/ugc/791993107341368188/0FAC398E713FA89A2AB7FAD72A0E6BAEF200A91A/?imw=268&imh=151&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    },
    {
        vehicleName: "IEC Granite",
        pcu: "32321",
        armor: "Heavy",
        power: "Battery/Hydrogen",
        imageURL:
            "https://steamuserimages-a.akamaihd.net/ugc/2262559176039910596/489D19E9EE3A70D569435B9B6615F53A22133E78/?imw=268&imh=151&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    },
    {
        vehicleName: "IEC Salvage Runner",
        pcu: "1755",
        armor: "Heavy",
        power: "Battery/Hydrogen",
        imageURL:
            "https://steamuserimages-a.akamaihd.net/ugc/2262558840924165279/1879FA96EC9E4C53F2FBBDBA190C2E2F2332C57C/?imw=268&imh=151&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    },
    {
        vehicleName: "IEC Wolver HAV Mk2",
        pcu: "1755",
        armor: "Heavy",
        power: "Battery/Hydrogen",
        imageURL:
            "https://steamuserimages-a.akamaihd.net/ugc/2056511879299828192/914C4B892DB8FCD1D1669E470864BB6BB4E5D0DC/?imw=268&imh=151&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    },
    {
        vehicleName: "IEC Lunar Crawler",
        pcu: "17046",
        armor: "Light",
        power: "Battery/Reactor",
        imageURL:
            "https://steamuserimages-a.akamaihd.net/ugc/1812129977693522719/8E2E4CCDF4283C356950DAE5CDFAC631E6C509B1/?imw=268&imh=151&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    }
];

createAquaticCard(vehicles);

function createAquaticCard(filteredVehicles) {
    filteredVehicles.forEach(vehicle => {
        let card = document.createElement("section");
        let name = document.createElement("h4");
        let pcu = document.createElement("p")
        let armor = document.createElement("p")
        let power = document.createElement("p")
        let img = document.createElement("img")

        name.innerHTML = `${vehicle.vehicleName}`;
        pcu.innerHTML = `<span class="label">PCU:</span> ${vehicle.pcu}`;
        armor.innerHTML = `<span class="label">Armor:</span> ${vehicle.armor}`;
        power.innerHTML = `<span class="label">Power:</span> ${vehicle.power}`;
        img.setAttribute("src", vehicle.imageURL);
        img.setAttribute("alt", `${vehicle.vehicleName} Spaceships`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "200");
        img.setAttribute("height", "150")

        card.appendChild(name);
        card.appendChild(pcu);
        card.appendChild(armor);
        card.appendChild(power);
        card.appendChild(img);

        document.querySelector(".vehicles-container").appendChild(card);
    });
}