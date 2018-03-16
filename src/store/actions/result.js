import * as actionTypes from "./actionTypes";

export const saveResult = (res) => {
  return {
    type: actionTypes.STORE_RESULT,
    result: res
  };
}

// asyncrounous action
export const store_result = (result) => {
  console.log('store_result result', result);
  //  dispatch, getState are passed by redux thunk
  // so getState gets the current state
  // you can use it to get the prior state, oldCounter
  return (dispatch, getState) => {
    setTimeout(() => {
      const oldCounter = getState().ctr.counter;
      // saveResult returns STORE_RESULT action
      // which updates the state in the store

      console.log('oldCounter', oldCounter);
      // dispatch(saveResult(result))
      console.log('dispatch(saveResult(result))', dispatch(saveResult(result)));
    }, 2000);
  }
};

// asyncrounous action
export const delete_rezult = (id) => {
  // return the actions
  return {
    type: actionTypes.DELETE_RESULT,
    resultElId: id
  };
};