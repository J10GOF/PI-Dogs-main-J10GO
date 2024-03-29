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
    type: "ORDER_BY_CREATION",
    payload,
  };
}

export function getTemperaments() {
  return async function (dispatch) {
    let temperaments = await axios.get("http://localhost:3001/temperaments");
    return dispatch({
      type: "GET_TEMPERAMENTS",
      payload: temperaments.data,
    });
  };
}

export function filteredByTemperament(payload) {
  return {
    type: "FILTERED_BY_TEMP",
    payload,
  };
}

export function getCreatedDogs(payload) {
  return async function (dispatch) {
    let postDog = await axios.post("http://localhost:3001/dog", payload);
    return postDog;
  };
}

export function getDogsByQuery(payload) {
  return async function (dispatch) {
    try {
      let dogNames = await axios.get(
        `http://localhost:3001/dogs?name=${payload}`
      );
      return dispatch({
        type: "GET_DOGS_NAME",
        payload: dogNames.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getDetails(payload) {
  return async function (dispatch) {
    try {
      const details = await axios.get(`http://localhost:3001/dogs/${payload}`);
      return dispatch({
        type: "GET_DETAILS",
        payload: details.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function cleaner() {
  return {
    type: "CLEANER",
    payload: {},
  };
}