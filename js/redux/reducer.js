// A pure function that:
/**
 *
 * @param {Array} state - The current state of the application
 * @param {Object} action - The object event being perfomed
 * @returns {Array} - The updated state
 */

function todos(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return state.concat([action.payload]);
    case "REMOVE_TASK":
      return state.filter((task) => task.id !== action.payload.id);
    case "COMPLETE_TASK":
      return state.map((task) => {
        if(task.id === action.payload.id){
          return ({...task, finished: !task.finished})
        }
        return task;
      });
    default:
      return state;
  }
}
