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

export function getCart(email) {
  try {
    return async function (dispatch) {
      const response = await axios.get(`${URL}/shoppingCart/${email}`);
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
    try {
      var json = await axios.get(`${URL}/product/${_id}`);
      return dispatch({
        type: "GET_DETAILS",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getProductsByCategory(category) {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`${URL}/products?category=${category}`);
      return dispatch({
        type: "GET_PRODUCTS_BY_CATEGORY",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function cleanResult() {
  return async function (dispatch) {
    return dispatch({
      type: "CLEAN_RESULT",
    });
  };
}

export function getUser() {
  try {
    return async function (dispatch) {
      const response = await axios.get(`${URL}/users`);
      dispatch({
        type: "GET_ALL_USER",
        payload: response.data,
      });
    };
  } catch (error) {
    console.log(error);
  }
}


export function postUserData(email, data) {
  return async function (dispatch) {
    const newUser = await axios
      .post(`/user/${email}/personalData`, data)
      .catch((error) => console.log(error.response.data));
    return dispatch({ type: "USER_DATA", payload: data });
  };
}

export function userDisabled(id, disabledUser) {
  try {
    return async function (dispatch) {
      await axios.patch(`${URL}/user/${id}`, disabledUser);
      dispatch({ type: "USER_DISABLED", payload: id });
    };
  } catch (error) {
    console.log(error);
  }
}

export function postNewAdmin(data) {
  return async function (dispatch) {
    await axios
      .post(`/user`, data)
      .catch((error) => console.log(error.response.data));
    return dispatch({ type: "NEW_ADMIN" });
  };
}

export function getAllOrders() {
  return async function (dispatch) {
    const allOrders = await axios.get(`${URL}/order`);
    return dispatch({ type: "GET_ALL_ORDERS", payload: allOrders.data });
  };
}

export function toggleSideBar() {
  return async function (dispatch) {
    return dispatch({
      type: "TOGGLE_SIDEBAR",
    })
  }
}

export const updateProfile = (userData) => async (dispatch) => {
  try {
    dispatch ({type: "UPDATE_PROFILE_REQUEST"})
    const config = {
      headers: {
        'content-type':'multipart/form-data'
      }
    }
    const { data } = await axios.put('/api/v1/profileSettings', userData, config)
    dispatch ({
      type: "UPDATE_PROFILE_SUCCES",
      payload: data.success
    })
  } catch (error) {
    dispatch({
      type: "UPDATE_PROFILE_FAIL",
      payload: error.response.data.message
    })
  }
}