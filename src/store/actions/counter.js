import * as actionTypes from "./actionTypes";

// This increment is an action creator
// receive any payload we pass with the action
export const increment = () => {
  // return the actions
  return {
    // it creates this INCREMENT action
    type: actionTypes.INCREMENT
  };
};
export const decrement = () => {
  // return the actions
  return {
    type: actionTypes.DECREMENT
  };
};
export const add = (value) => {
  // return the actions
  return {
    type: actionTypes.ADD,
    val: value
  };
};
export const substract = (value) => {
  // return the actions
  return {
    type: actionTypes.SUBTRACT,
    val: value
  };
};