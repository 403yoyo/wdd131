const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = input.value;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = '❌';

  deleteButton.setAttribute('aria-label', `Delete chapter ${input.value}`);

  li.append(deleteButton);
  list.append(li);
});


