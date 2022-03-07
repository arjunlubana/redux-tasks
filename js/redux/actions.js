// Actions return objects that have a type & the data payload
/**
 *
 * @param {Object} payload The data added to the state
 * @returns Object describing the event perfomed
 */

function ADD_TASK(payload) {
  return {
    type: "ADD_TASK",
    payload,
  };
}

function REMOVE_TASK(payload) {
  return {
    type: "REMOVE_TASK",
    payload,
  };
}

function COMPLETE_TASK(payload) {
  return {
    type: "COMPLETE_TASK",
    payload,
  };
}


function SIGN_IN(payload) {
  return {
    type: "SIGN_IN",
    payload,
  };
}