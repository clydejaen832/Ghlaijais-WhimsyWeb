function addTask() {
  const input = document.getElementById("taskInput");
  if (!input.value) return;

  currentPlan.tasks.push(input.value);

  renderTasks();
  savePlan();

  input.value = "";
}

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  currentPlan.tasks.forEach((task, i) => {
    const div = document.createElement("div");

    div.innerHTML = "☐ " + task;
    div.onclick = () => {
      div.innerHTML = "✔ " + task;
    };

    list.appendChild(div);
  });
}