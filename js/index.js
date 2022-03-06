let tasks_list = document.getElementById("tasks");
let task_description = document.getElementById("description");

const updateUserInterface = (state) => {
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

// Adding a task to the store
function addTask(event) {
  event.preventDefault();
  store.dispatch(
    ADD_TASK({
      id: store.getState().length + 1,
      description: task_description.value,
      finished: false,
    })
  );
}

function deleteTask(id) {
  store.dispatch(
    REMOVE_TASK({
      id: id,
    })
  );
}

function completeTask(id) {
  store.dispatch(
    COMPLETE_TASK({
      id: id,
    })
  );
}

store.subscribe(() => {
  let state = store.getState();
  updateUserInterface(state);
});
