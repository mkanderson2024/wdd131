// Starting information of arrays
myInfo = {
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    placesLived: [
        {
            place: "Rexburg, ID",
            length: "5 years",
        },
        {
            place: "Ammon, ID",
            length: "3 years",
        },
        {
            place: "Sandy, UT",
            length: "1 year",
        },
    ],
};
// Constants set for foods and places (Remember constants are like variables but you have to declare them which is what this does)
// and references the list favorite foods and places lived
const foodsElement = document.querySelector("#favorite-foods");
const placesElement = document.querySelector("#places-lived");
// function that requires a list and a "callback" (or in other words, referencing the foodsTemplate function)
// returns a string in html (this part "writes the array in a list on the webpage")
function generateListMarkup(list, templateCallback) {
    const htmlList = list.map(templateCallback);
    return htmlList.join("");
}
// creates food string and 
// returns that string embedded in HTML markup to print to the webpage. Remember the <li> tag is a list tag.
function foodsTemplate(food) {
    return `<li>${food}</li>`;
}

// creates places string and
// returns that string embedded in HTML markup to print to the webpage. Remember the <dt> tag is a description list tag.
function placesTemplate(place) {
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
}
// "main" part of the code that calls the functions to create the lists
foodsElement.innerHTML = generateListMarkup(
    myInfo.favoriteFoods,
    foodsTemplate
);
placesElement.innerHTML = generateListMarkup(
    myInfo.placesLived,
    placesTemplate
);


// Original Code looping through For reference. For additional notes reference back to

// function mapFoodItemSmall(food) {
//     return `<li>${food}</li>`;
// }

// myInfo = {
//     name: "Brother T",
//     photo: "images/photo.jpg",
//     favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
//     hobbies: ["Reading", "Fishing", "Camping"],
//     placesLived: [
//         {
//             place: "Rexburg, ID",
//             length: "5 years",
//         },
//         {
//             place: "Ammon, ID",
//             length: "3 years",
//         },
//         {
//             place: "Sandy, UT",
//             length: "1 year",
//         },
//     ],
// };
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
// let favoriteFood1 = document.createElement("li");
// favoriteFood1.textContent = myInfo.favoriteFoods[0];

// let favoriteFood2 = document.createElement("li");
// favoriteFood2.textContent = myInfo.favoriteFoods[1];

// let favoriteFood3 = document.createElement("li");
// favoriteFood3.textContent = myInfo.favoriteFoods[2];

// let favoriteFood4 = document.createElement("li");
// favoriteFood4.textContent = myInfo.favoriteFoods[3];

// // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
// document.querySelector("#favorite-foods").appendChild(favoriteFood1);
// document.querySelector("#favorite-foods").appendChild(favoriteFood2);
// document.querySelector("#favorite-foods").appendChild(favoriteFood3);
// document.querySelector("#favorite-foods").appendChild(favoriteFood4);