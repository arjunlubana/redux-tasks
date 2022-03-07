// A pure function that:
/**
 *
 * @param {Array} state - The current state of the application
 * @param {Object} action - The object event being perfomed
 * @returns {Array} - The updated state
 */

const combineReducers = Redux.combineReducers;

function tasks(state = [], action) {
  switch (action.type) {
    case "ADD_TASK":
      return state.concat([action.payload]);
    case "REMOVE_TASK":
      return state.filter((task) => task.id !== action.payload.id);
    case "COMPLETE_TASK":
      return state.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, finished: !task.finished };
        }
        return task;
      });
    default:
      return state;
  }
}

function user(state = {}, action) {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        username: action.payload.username,
        password: action.payload.password,
      };
    case "LOG_OUT":
      return {};
    default:
      return state;
  }
}

let rootReducer = combineReducers({ tasks, user });
