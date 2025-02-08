//Constants
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const li = document.createElement('li');
const deleteButton = document.createElement('button')

button.addEventListener('click', () => {
    if (input.value != '') { //This makes sure that the input is not empty
        displayList(input.value); //This calls the function that ouputs the submitted chapter
        chaptersArray.push(input.value); //THis adds the chpater to the array
        setChapterList(); //This updates the Localstorage with the new array
        input.value = ''; //This clears the input
        input.focus(); //This sets the focus back to the input
    }
});

deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    list.remove();
    input.focus();
    input.value = '';
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    })
}
);
//Array creation
let chaptersArray = getChapterList() || [];
chaptersArray.forEach(chapter => {
    displayList(chapter)
});

//-------------Functions----------------
//Display Function
function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item; // Remember this is a parameter ietm
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent); // This function removes the chapter from the array and localStorage.
        input.focus(); // This sets the focus back to the input
    });

}
//Setter function
function setChapterList() {
    localStorage.setItem('myFavBomList', JSON.stringify(chaptersArray));
};
//Getter function
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBomList'));
};
//Chapter Delete Function
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
};


//Event Listener
