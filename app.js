let currentPlan = {
  id: null,
  tasks: []
};

function startDay() {
  document.querySelector(".container").classList.add("hidden");
  document.getElementById("dashboard").classList.remove("hidden");
}

function createPlan() {
  currentPlan.id = generateCode();
  alert("PLAN CREATED: " + currentPlan.id);
  startDay();
  savePlan();
}

function generateCode() {
  return "D-" + Math.random().toString(36).substring(2, 6).toUpperCase();
}