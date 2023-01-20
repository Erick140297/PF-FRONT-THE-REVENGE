// funciones
// AXIOS
import axios from "axios";

export function GetAllProducts() {
  try {
    return async function (dispatch) {
      const response = await axios.get("http://localhost:3001/products");
      dispatch({
        type: "GET_ALL_PRODUCTS",
        payload: response.data,
      });
    };
  } catch (error) {
    console.log("este es el error -->", error);
  }
}

export function getProductsByName(name) {
  try {
    return async function (dispatch) {
      const response = await axios.get(
        `http://localhost:3001/products?name=${name}`
      );
      dispatch({
        type: "GET_PRODUCTS_BY_NAME",
        payload: response.data,
      });
    };
  } catch (error) {
    console.log("este es el error -->", error);
  }
}

export function getProductsBySubCategory(subCategory) {
  try {
    return async function (dispatch) {
      const response = await axios.get(
        `http://localhost:3001/products?subcategory=${subCategory}`
      );
      dispatch({
        type: "GET_PRODUCTS_BY_SUBCATEGORY",
        payload: response.data,
      });
    };
  } catch (error) {
    console.log("este es el error -->", error);
  }
}
