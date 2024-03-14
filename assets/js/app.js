const inputEl = document.querySelector(".input");
const closeIconEl = document.querySelector(".bi-x");
const formEl = document.querySelector(".form");
const taskEl = document.querySelector(".task");
const allDeleteEl = document.querySelector(".all_delete_btn");
closeIconEl.addEventListener("click", () => {
  inputEl.value = "";
});

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const divEl = document.createElement("div");
  const divBtnEl = document.createElement("div");
  const btnCompleteEl = document.createElement("button");
  const btnEditEl = document.createElement("button");
  const btnsoatEl = document.createElement("button");
  const btndaletitEl = document.createElement("button");
  const pEl = document.createElement("p");

  divEl.className = "task_card";
  pEl.className = "task_name";
  divBtnEl.className = "btn_group";
  btnCompleteEl.className = "comp_btn";
  btnEditEl.className = "edit_btn";
  btnsoatEl.className = "soat_btn"
  btndaletitEl.className = "daleti_btn"
  btnCompleteEl.innerHTML = `<i class="bi bi-check2-circle"></i> <br> Complite`;
  btnEditEl.innerHTML = `<i class="bi bi-pencil-square"></i> <br> Edit`;
  btnsoatEl.innerHTML = `<i class="bi bi-stopwatch"></i> <br> 16:00:47`;
  btndaletitEl.innerHTML = `<i class="bi bi-trash-fill"></i> <br> Delete`;
  pEl.innerHTML = inputEl.value;
  divEl.appendChild(pEl);
  divBtnEl.appendChild(btnCompleteEl);
  divBtnEl.appendChild(btnEditEl);
  divBtnEl.appendChild(btnsoatEl);
  divBtnEl.appendChild(btndaletitEl);
  divEl.appendChild(divBtnEl);
  taskEl.prepend(divEl);

  inputEl.value = "";
});

allDeleteEl.addEventListener("click", () => {
  let con = confirm("Agree to delete all !!!!!!!!!!!!!!!!");
  if (con) {
    taskEl.innerHTML = "";
  }
});