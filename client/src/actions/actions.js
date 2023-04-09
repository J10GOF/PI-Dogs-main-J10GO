import axios from "axios";

export function getAllDogs() {
  return async function (dispatch) {
    let dogs = await axios.get("http://localhost:3001/dogs");
    return dispatch({
      type: "GET_DOGS",
      payload: dogs.data,
    });
  };
}

export function orderAlphabetically(payload) {
  return {
    type: "ORDER_BY_ATOZ",
    payload,
  };
}

export function orderByWeight(payload) {
  return {
    type: "ORDER_BY_WEIGHT",
    payload,
  };
}

export function createdInDb(payload) {
  console.log(payload);
  return {
    type: "CREATED_IN_DB",
    payload,
  };
}