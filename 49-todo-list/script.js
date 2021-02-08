const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUl = document.getElementById('todos');

const todos = JSON.parse(sessionStorage.getItem('todos'));

if (todos) {
  for (let todo of todos) {
    addTodo(todo);
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  addTodo();
});

function addTodo(todo) {
  let todoText = input.value;

  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const todoEl = document.createElement('li');
    if (todo && todo.completed) {
      todoEl.classList.add('completed');
    }

    todoEl.innerText = todoText;

    todoEl.addEventListener('click', () => {
      todoEl.classList.toggle('completed');
      updateSS();
    });

    todoEl.addEventListener('contextmenu', (e) => {
      e.preventDefault();

      todoEl.remove();
      updateSS();
    });

    todosUl.appendChild(todoEl);

    input.value = '';

    updateSS();
  }
}

function updateSS() {
  todosEl = document.querySelectorAll('li');

  const todos = [];

  for (let todoEl of todosEl) {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains('completed'),
    });
  }

  sessionStorage.setItem('todos', JSON.stringify(todos));
}
