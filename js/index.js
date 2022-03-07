// Adding a task to the store
function addTask(event) {
  event.preventDefault();
  let tasksCount = store.getState().tasks.length;
  store.dispatch(
    ADD_TASK({
      id: ++tasksCount,
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

function loginUser(event) {
  event.preventDefault();
  toggleLoginModal();
  store.dispatch(
    SIGN_IN({
      username: username.value,
      password: password.value,
    })
  );
}

store.subscribe(() => {
  let state = store.getState();
  updateTasksList(state.tasks);
  updateProfile(state.user);
});
