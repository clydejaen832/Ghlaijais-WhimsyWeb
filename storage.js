function savePlan() {
  localStorage.setItem("doodlePlan", JSON.stringify(currentPlan));
}

function loadPlan() {
  const data = localStorage.getItem("doodlePlan");
  if (data) currentPlan = JSON.parse(data);
}