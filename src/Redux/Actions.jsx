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
}

export function postUser(user) {
  try {
    return async function (dispatch) {
      const response = await axios.post(`${URL}/user`, user);
      console.log(response)
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
    return async function (dispatch) {
      const response = await axios.post(`${URL}/shoppingCart`, obj);
      dispatch({
        type: "ID_CART",
        payload: response.data._id,
      });
    };
  } catch (error) {
    console.log(error);
  }
}

export function getCart(id) {
  try {
    return async function (dispatch) {
      const response = await axios.get(`${URL}/shoppingCart/${id}` );
      dispatch({
        type: "GET_CART",
        payload: response.data,
      });
    };
  } catch (error) {
    console.log(error);
  }
}

export function getDetail(_id) {
  return async function (dispatch) {
    try{
        var json = await axios.get(`${URL}/product/${_id}`);
    return dispatch({
      type: "GET_DETAILS",
      payload: json.data
    })
   
} catch(error) {
  console.log(error)
}
  }
}

export function getProductsByCategory(category) {
  return async function (dispatch) {
    try{
        const { data } = await axios.get(`${URL}/products?category=${category}`);
    return dispatch({
      type: "GET_PRODUCTS_BY_CATEGORY",
      payload: data
    })
   
} catch(error) {
  console.log(error)
}
  }
}