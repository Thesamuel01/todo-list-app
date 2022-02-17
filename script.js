function getOrdereListElement() {
  const orderedList = document.querySelector('#lista-tarefas');

  return orderedList;
}

function getListItems() {
  const listItems = document.querySelectorAll('.item');

  return listItems;
}

function updateLocalStorage() {
  const list = getListItems();
  const history = [];

  for (let index = 0; index < list.length; index += 1) {
    const element = list[index].outerHTML;

    history.push(element);
  }

  console.log(history);

  localStorage.setItem('history', JSON.stringify(history));
}

function createTask(task) {
  const li = document.createElement('li');

  li.classList.add('item');
  li.innerHTML = task;

  return li;
}

function addTask() {
  const button = document.querySelector('#criar-tarefa');

  button.addEventListener('click', () => {
    const input = document.querySelector('#texto-tarefa');
    const list = getOrdereListElement();
    const task = createTask(input.value);

    list.appendChild(task);
    input.value = '';
  });
}

function removeBackgroundColor(selectedTask) {
  selectedTask.classList.toggle('selected');
}

function changeItemsBackgroundColor() {
  const list = getOrdereListElement();

  list.addEventListener('click', (event) => {
    const element = event.target;
    const hasTheClassItem = element.className.includes('item');
    const oldSelectedTask = document.querySelector('.selected');

    if (hasTheClassItem) {
      if (oldSelectedTask !== null) {
        removeBackgroundColor(oldSelectedTask);
      }

      element.classList.toggle('selected');
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

function saveTasks() {
  const saveButton = document.querySelector('#salvar-tarefas');

  saveButton.addEventListener('click', () => {
    updateLocalStorage();
  });
}

window.onload = () => {
  if (localStorage.length !== 0) {
    const list = getOrdereListElement();
    const listItems = JSON.parse(localStorage.getItem('history'));

    for (let index = 0; index < listItems.length; index += 1) {
      const element = listItems[index];
      list.innerHTML += `${element}\n`;
    }
  } else {
    localStorage.setItem('history', JSON.stringify([]));
  }
};

addTask();
changeItemsBackgroundColor();
putLineThroughInTheText();
clearAllTask();
clearCompletedTasks();
saveTasks();
