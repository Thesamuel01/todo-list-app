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

function changeBackgroundColor() {
  
  orderedList.addEventListener('click', (event) => {
    const element = event.target;
    const hasClassNameItem = element.className.includes('item');

    if (hasClassNameItem) {
      element.style.backgroundColor = 'grey';
    }
  });
}

changeBackgroundColor();
addTask();
