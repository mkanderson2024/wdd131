const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const li = document.createElement('li');
const deleteButton = document.createElement('button')

button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        li.textContent = input.value;
        list.appendChild(li);
        li.append(deleteButton);
        input.focus(input);
    }
});

deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    list.remove();
    input.focus();
    input.value = '';
}
);