const orderedList = document.querySelector('#lista-tarefas');

function addTask() {
  const button = document.querySelector('#criar-tarefa');

  button.addEventListener('click', () => {
    const input = document.querySelector('#texto-tarefa');
    const li = document.createElement('li');

    li.classList.add('item');
    li.innerHTML = input.value;
    orderedList.appendChild(li);
    input.value = '';
  });
}

function removeItemsBackgroundColor(items) {
  for (let index = 0; index < items.length; index += 1) {
    const element = items[index];

    element.style.backgroundColor = '';
  }
}

function changeItemsBackgroundColor() {

  orderedList.addEventListener('click', (event) => {
    const listItems = document.querySelectorAll('.item');
    const element = event.target;
    const hasClassNameItem = element.className.includes('item');

    if (hasClassNameItem) {
      removeItemsBackgroundColor(listItems);
      element.style.backgroundColor = 'grey';
    }
  });
}

changeItemsBackgroundColor();
addTask();
