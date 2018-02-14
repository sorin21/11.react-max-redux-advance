import * as actionTypes from "./actionTypes";

export const saveResult = (res) => {
  return {
    type: actionTypes.STORE_RESULT,
    result: res
  };
}
export const store_result = (result) => {
  return (dispatch) => {
    setTimeout(() => {
      // saveResult returns STORE_RESULT action
      // which updates the state in the store
      dispatch(saveResult(result))
    }, 2000);
  }
};
export const delete_rezult = (id) => {
  // return the actions
  return {
    type: actionTypes.DELETE_RESULT,
    resultElId: id
  };
};