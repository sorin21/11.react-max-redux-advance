// oldObject we want to copy and update
export const updateObject = (oldObject, updatedValues) => {
  // return an updated object
  return {
    // distributes the props of the old object
    ...oldObject,
    // is a js obj with all the values we want to overwrite ...updatedValues 
  }
};