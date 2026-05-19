const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const deleteAllBtn = document.getElementById("deleteall-btn");

/* =========================
   CREAR ELEMENTO DE TAREA
========================= */
function createTaskElement(taskText, completed = false) {
  const li = document.createElement("li");

  if (completed) {
    li.classList.add("completed");
  }

  li.innerHTML = `
    <span>${taskText}</span>

    <div class="btn-controls">
      <button class="delete-btn">Delete</button>
      <button class="edit-btn">Edit</button>
      <button class="complete-btn">
        ✓
      </button>
    </div>
  `;

  return li;
}

/* =========================
   GUARDAR TAREAS
========================= */
function saveTasks() {
  const tasks = [];

  document.querySelectorAll("#task-list li").forEach((task) => {
    tasks.push({
      text: task.querySelector("span").textContent,
      completed: task.classList.contains("completed"),
    });
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

/* =========================
   CARGAR TAREAS
========================= */
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => {
    const taskElement = createTaskElement(task.text, task.completed);
    taskList.appendChild(taskElement);
  });
}

/* =========================
   AGREGAR TAREA
========================= */
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskText = taskInput.value.trim();

  if (!taskText) return;

  const taskElement = createTaskElement(taskText);

  taskList.appendChild(taskElement);

  taskInput.value = "";

  saveTasks();
});

/* =========================
   EVENT DELEGATION
========================= */
taskList.addEventListener("click", (e) => {
  const button = e.target.closest("button");

  if (!button) return;

  const taskItem = button.closest("li");

  // Eliminar
  if (button.classList.contains("delete-btn")) {
    taskItem.remove();
  }

  // Completar
  if (button.classList.contains("complete-btn")) {
    taskItem.classList.toggle("completed");
  }

  // Editar
  if (button.classList.contains("edit-btn")) {
    const span = taskItem.querySelector("span");

    const newText = prompt("Editar tarea:", span.textContent);

    if (newText && newText.trim()) {
      span.textContent = newText.trim();
    }
  }

  saveTasks();
});

/* =========================
   ELIMINAR TODAS
========================= */
deleteAllBtn.addEventListener("click", () => {
  taskList.innerHTML = "";
  localStorage.removeItem("tasks");
});

/* =========================
   INICIALIZAR
========================= */
window.addEventListener("DOMContentLoaded", loadTasks);
