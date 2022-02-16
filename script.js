function addTask() {
  const button = document.querySelector('#criar-tarefa');

  button.addEventListener('click', () => {
    const orderedList = document.querySelector('#lista-tarefas');
    const input = document.querySelector('#texto-tarefa');
    const li = document.createElement('li');

    li.innerHTML = input.value;
    orderedList.appendChild(li);
    input.value = '';
  });
}

addTask();
