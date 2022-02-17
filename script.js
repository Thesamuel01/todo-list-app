function getOrdereListElement() {
  const orderedList = document.querySelector('#lista-tarefas');

  return orderedList;
}

function getListItems() {
  const listItems = document.querySelectorAll('.item');

  return listItems;
}

function addTask() {
  const button = document.querySelector('#criar-tarefa');

  button.addEventListener('click', () => {
    const input = document.querySelector('#texto-tarefa');
    const li = document.createElement('li');
    const list = getOrdereListElement();

    li.classList.add('item');
    li.innerHTML = input.value;
    list.appendChild(li);
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
  const list = getOrdereListElement();

  list.addEventListener('click', (event) => {
    const listItems = getListItems();
    const element = event.target;
    const hasTheClassItem = element.className.includes('item');

    if (hasTheClassItem) {
      removeItemsBackgroundColor(listItems);
      element.style.backgroundColor = 'grey';
    }
  });
}

function putLineThroughInTheText() {
  const list = getOrdereListElement();
  list.addEventListener('dblclick', (event) => {
    const element = event.target;
    const hasTheClassItem = element.className.includes('item');

    if (hasTheClassItem) {
      element.classList.toggle('completed');
    }
  });
}

function clearAllTask() {
  const clearButton = document.querySelector('#apaga-tudo');
  const list = getOrdereListElement();

  clearButton.addEventListener('click', () => {
    const listItems = getListItems();

    for (let index = 0; index < listItems.length; index += 1) {
      const element = listItems[index];

      list.removeChild(element);
    }
  });
}

function clearCompletedTasks() {
  const clearCompletedTasksButton = document.querySelector('#remover-finalizados');
  const list = getOrdereListElement();

  clearCompletedTasksButton.addEventListener('click', () => {
    const listItems = getListItems();

    for (let index = 0; index < listItems.length; index += 1) {
      const element = listItems[index];
      const hasTheClassCompleted = element.className.includes('completed');

      if (hasTheClassCompleted) {
        list.removeChild(element);
      }
    }
  });
}

addTask();
changeItemsBackgroundColor();
putLineThroughInTheText();
clearAllTask();
clearCompletedTasks();
