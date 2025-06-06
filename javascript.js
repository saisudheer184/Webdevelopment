// Get references to elements
const taskForm = document.getElementById('todo-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Load tasks from localStorage or initialize empty array
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to save tasks to localStorage
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to render tasks on the page
function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${task}
      <button onclick="deleteTask(${index})">Delete</button>
    `;
    taskList.appendChild(li);
  });
}

// Function to add a new task
taskForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const newTask = taskInput.value.trim();
  if (newTask) {
    tasks.push(newTask);
    taskInput.value = '';
    saveTasks();
    renderTasks();
  }
});

// Function to delete a task
function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

// Initial render on page load
renderTasks();
