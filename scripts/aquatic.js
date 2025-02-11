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
const navalcrafts = [
    {
        navalcraftName: "IEC Lance Destroyer",
        pcu: "9728",
        armor: "Heavy",
        power: "Battery/Reactor",
        imageURL:
            "https://steamuserimages-a.akamaihd.net/ugc/1863954474570501586/7DA40E12B4E54C34191B7689D8B61D20000C99F4/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    },
    {
        navalcraftName: "IEC Trident Destroyer",
        pcu: "15331",
        armor: "Heavy",
        power: "Battery/Reactor",
        imageURL:
            "https://steamuserimages-a.akamaihd.net/ugc/1863954474570661823/DD20B65E2604C8E6F43F7F26D373909F42D4E49C/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    },
    {
        navalcraftName: "IEC Javelin Destroyer",
        pcu: "14679",
        armor: "Heavy",
        power: "Battery/Reactor",
        imageURL:
            "https://steamuserimages-a.akamaihd.net/ugc/2482123607358328369/92421904C56CE62A43FBF19F6C0584B7CFE73C15/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    },
    {
        navalcraftName: "IEC Nexus Carrier",
        pcu: "135820",
        armor: "Heavy",
        power: "Battery/Reactor",
        imageURL:
            "https://steamuserimages-a.akamaihd.net/ugc/2482123607357878760/2A1E420410C290ED34DDB7DB986E7586604770AB/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    },
    {
        navalcraftName: "IEC Missile Cruiser",
        pcu: "41495",
        armor: "Heavy",
        power: "Battery/Reactor",
        imageURL:
            "https://steamuserimages-a.akamaihd.net/ugc/2021598081965891743/242FC818FF9322EB3039E003E069E1F2685E088E/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    },
    {
        navalcraftName: "IEC Railgun Destroyer",
        pcu: "9728",
        armor: "Heavy",
        power: "Battery/Reactor",
        imageURL:
            "https://steamuserimages-a.akamaihd.net/ugc/2021596932971618753/69C455D9F9A185E7CA280627F24BEB1F845563A5/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    },
    {
        navalcraftName: "IEC Ascunder Gunboat",
        pcu: "3286",
        armor: "Heavy",
        power: "Battery/Reactor",
        imageURL:
            "https://steamuserimages-a.akamaihd.net/ugc/1862813057741809976/D1C7CEA2849298C0005C05D05C942664A0CB238D/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    },
    {
        navalcraftName: "IEC Asunder Patrolboat",
        pcu: "3186",
        armor: "Heavy",
        power: "Battery/Reactor",
        imageURL:
            "https://steamuserimages-a.akamaihd.net/ugc/1862813057741789073/0627D9A51CA869B833AD757A1EC83464E43C684B/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
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
        img.setAttribute("alt", `${navalcraft.navalcraftName} Navalcraft`);
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