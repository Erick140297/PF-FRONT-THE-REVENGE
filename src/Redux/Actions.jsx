// funciones
// AXIOS
import axios from "axios";

const URL = `http://localhost:3001`;

export function GetAllProducts() {
  try {
    return async function (dispatch) {
      const response = await axios.get(`${URL}/products`);
      dispatch({
        type: "GET_ALL_PRODUCTS",
        payload: response.data,
      });
    };
  } catch (error) {
    console.log(error);
  }
}

export function getProductsByName(name) {
  try {
    return async function (dispatch) {
      const response = await axios.get(`${URL}/products?name=${name}`);
      dispatch({
        type: "GET_PRODUCTS_BY_NAME",
        payload: response.data,
      });
    };
  } catch (error) {
    console.log(error);
  }
}

export function getProductsBySubCategory(subCategory) {
  try {
    return async function (dispatch) {
      const response = await axios.get(
        `${URL}/products?subcategory=${subCategory}`
      );
      dispatch({
        type: "GET_PRODUCTS_BY_SUBCATEGORY",
        payload: response.data,
      });
    };
  } catch (error) {
    console.log(error);
  }
}

export function setLoader() {
  return {
    type: "SET_LOADER_TRUE",
  };
  
export function postUser(user) {
  try {
    return async function (dispatch) {
      const response = await axios.post(`${URL}/user`, user);
      dispatch({
        type: "POST_USER",
        payload: response.data,
      });
    };
  } catch (error) {
    console.log(error);
  }
}

export function addToCart(obj) {
  try {
    return async function () {
      await axios.post(`${URL}/shoppingCart`, obj);
    };
  } catch (error) {
    console.log(error);
  }
}
