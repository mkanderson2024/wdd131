const input = document.querySelector('#favchap');
const button = document.querySelector('#submit');
const list = document.querySelector('#list');
const li = document.createElement('li');
const deleteButton = createElement('button');

li.textContent = input.value;
deleteButton.textContent = '❌';
li.append(deleteButton);
list.append(li);