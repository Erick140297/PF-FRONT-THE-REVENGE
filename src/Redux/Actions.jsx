// funciones
// AXIOS
import axios from "axios";


const URL = `https://pf-back-the-revenge-production.up.railway.app`;

export function GetAllProducts() {
  try {
    return async function(dispatch) {
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
    return async function(dispatch) {
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
    return async function(dispatch) {
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
    return async function(dispatch) {
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
    return async function(dispatch) {
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
    return async function(dispatch) {
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
  return async function(dispatch) {
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
  return async function(dispatch) {
    try {
      const { data } = await axios.get(`${URL}/products?category=${category}`);
      console.log(data);
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
  return async function(dispatch) {
    return dispatch({
      type: "CLEAN_RESULT",
    });
  };
}

export function cleanDetail() {
  return async function(dispatch) {
    return dispatch({
      type: "CLEAN_DETAIL",
    });
  };
}

export function getUser() {
  try {
    return async function(dispatch) {
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
  return async function(dispatch) {
    const newUser = await axios
      .post(`/user/${email}/personalData`, data)
      .catch((error) => console.log(error.response.data));
    return dispatch({ type: "USER_DATA", payload: data });
  };
}

export function userDisabled(id, data) {
  try {
    return async function(dispatch) {
      await axios.put(`${URL}/user/${id}`, data);
      dispatch({ type: "USER_DISABLED", payload: data });
    };
  } catch (error) {
    console.log(error);
  }
}
export function updateUser (id, data) {
  try {
    return async function(dispatch){
      await axios.put(`${URL}/user/${id}`, data);
    dispatch({ type: 'UPDATE_USER', payload:data });}
  } catch (error) {
    dispatch({
      type: 'UPDATE_USER_ERROR',
      payload: error.response.data
    });
  }
};

export function updateorder(id, data) {
  try {
    return async function(dispatch) {
      await axios.put(`${URL}/order/${id}`, data);
      return dispatch({ type: "UPDATE_ORDER" });
      
    };
  } catch (error) {}
}

export const changeOrderStatusAndSendEmail = (id, status) => async dispatch => {
  try {
  const response = await axios.post(`${URL}/order/status/${id}`, { status });

  dispatch({
  type: "CHANGE_ORDER_STATUS",
  payload: response.data
  });
  dispatch((response.data.email, response.data.subject, response.data.contentHtml));
  } catch (error) {
  console.error(error);
  }
  };


export function postNewAdmin(data) {
  return async function(dispatch) {
    await axios
      .post(`/user`, data)
      .catch((error) => console.log(error.response.data));
    return dispatch({ type: "NEW_ADMIN" });
  };
}

export function getAllOrders() {
  return async function(dispatch) {
    const allOrders = await axios.get(`${URL}/order`);
    return dispatch({ type: "GET_ALL_ORDERS", payload: allOrders.data });
  };
}

export function toggleSideBar() {
  return async function(dispatch) {
    return dispatch({
      type: "TOGGLE_SIDEBAR",
    });
  };
}

export function updateProfile(id, info) {
  return async function(dispatch) {
    await axios
      .put(`${URL}/user/${id}`, info)
      .catch((error) => console.log(error.response.data));
    return dispatch({ type: "UPDATE_PROFILE" });
  };
}

export function getInfoUser(email) {
  try {
    return async function(dispatch) {
      const { data } = await axios.get(`${URL}/users?email=${email}`);
      dispatch({
        type: "GET_INFO_USER",
        payload: data,
      });
    };
  } catch (error) {
    console.log(error);
  }
}

export function getMyOrders(userId) {
  try {
    return async function(dispatch) {
      const { data } = await axios.get(`${URL}/order?userId=${userId}`);
      dispatch({
        type: "GET_MY_ORDERS",
        payload: data,
      });
    };
  } catch (error) {
    console.log(error);
  }
}

export function getOrder(id) {
  try {
    return async function(dispatch) {
      const { data } = await axios.get(`${URL}/order/${id}`);
      dispatch({
        type: "GET_ORDER",
        payload: data,
      });
    };
  } catch (error) {
    console.log(error);
  }
}


export function deletePurchaseOrder(id) {
  return dispatch => {
    dispatch({ type: "DELETE_PURCHASE_ORDER" });
    axios
      .delete(`${URL}/order/${id}`)
      .then(res => {
        dispatch({ type: "DELETE_PURCHASE_ORDER_SUCCESS", payload: res.data });
      })
      .catch(error => {
        dispatch({ type: "DELETE_PURCHASE_ORDER_ERROR", error });
      });
  };
}
export function deleteUser(id) {
  return dispatch => {
    dispatch({ type: "DELETE_USER" });
    axios
      .delete(`${URL}/user/${id}`)
      .then(res => {
        dispatch({ type: "DELETE_USER_SUCCESS", payload: res.data });
      })
      .catch(error => {
        dispatch({ type: "DELETE_USER_ERROR", error });
      });
  };
}
export function deleteProduct(id) {
  return dispatch => {
    dispatch({ type: "DELETE_PRODUCT" });
    axios
      .delete(`${URL}/product/${id}`)
      .then(res => {
        dispatch({ type: "DELETE_PRODUCT_SUCCESS", payload: res.data });
      })
      .catch(error => {
        dispatch({ type: "DELETE_PRODUCT_ERROR", error });
      });
  };
}

