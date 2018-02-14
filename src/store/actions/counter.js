import * as actionTypes from "./actionTypes";

// receive any payload
export const increment = () => {
  // return the actions
  return {
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