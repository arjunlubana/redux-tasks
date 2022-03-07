let tasks_list = document.getElementById("tasks");
let task_description = document.getElementById("description");
let login_modal = document.getElementById("login-modal");
let username = document.getElementById("username");
let password = document.getElementById("password");
let profile = document.getElementById("profile");

function toggleLoginModal() {
    login_modal.style.display =
      login_modal.style.display == "none" ? "block" : "none";
  }
  
  const updateTasksList = (state) => {
    task_description.value = "";
    tasks_list.innerHTML = "";
    let tasks_list_template = state.map(
      (task) =>
        `<li id=${task.id}>` +
        `<input type="checkbox" name="complete_task" id=${
          task.id
        } class="complete-task" onclick="completeTask(${task.id})" ${
          task.finished ? "checked" : ""
        }>` +
        `<span class="task-description">${task.description}</span>` +
        `<img id=${task.id} src="./images/trash-b.svg" alt="trash bin icon" class="delete-button" onclick="deleteTask(${task.id})" />` +
        `</li>`
    );
    tasks_list.innerHTML = state.length
      ? tasks_list_template.join("")
      : `<div class="no-tasks" >You are free at the moment</div>`;
  };
  
  const updateProfile = (state) => {
    username.value = "";
    password.value = "";
    profile.innerHTML = `Welcome, ${state.username}`;
  };