//Copyright Year Calculation
const date = new Date;
const year = document.getElementById("copyright-year");
year.innerHTML += date.getFullYear();
//Last Modified Calculation
const modified = document.getElementById("lastModified");
let lastModified = new Date(document.lastModified);
modified.innerHTML += lastModified;

//Windchill Calculation
//Constants
const temp = 90;
const speed = 6;

//Query selectors

const temperature = document.querySelector("#temperature");
const condition = document.querySelector("#conditions");
const wind = document.querySelector("#wind");
const windchill = document.querySelector("#windchill");


//If statment
if (temp <= 50 && speed > 3) {
    const windChillTemp = calculateWindChill(temp, speed);
    temperature.innerHTML = `${temp}`;
    condition.innerHTML = `Partly Cloudy`;
    wind.innerHTML = `${speed} mph`
    windchill.innerHTML = `${windChillTemp}`
}
else {
    temperature.innerHTML = `${temp}`;
    condition.innerHTML = `Partly Cloudy`;
    wind.innerHTML = `${speed} mph`
    windchill.innerHTML = `N/A`
}

//Function
function calculateWindChill(u, v) {
    return Math.sqrt(Math.pow(u, 2) + Math.pow(v, 2));
}