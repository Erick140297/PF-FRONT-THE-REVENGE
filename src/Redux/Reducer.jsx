// rootreducer

const initialState = {
  allProducts: [],
  productsByName: [],
  loader: true,
  user: {},
  cart: {},
  idCart: "",
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ALL_PRODUCTS":
      return {
        ...state,
        loader: false,
        allProducts: action.payload,
      };

    case "GET_PRODUCTS_BY_NAME":
      return {
        ...state,
        productsByName: action.payload,
      };

    case "GET_PRODUCTS_BY_SUBCATEGORY":
      return {
        ...state,
        productsByName: action.payload,
      };

    case "SET_LOADER_TRUE":
      return {
        ...state,
        loader: true,
      };

    case "POST_USER":
      return {
        ...state,
        user: action.payload,
      };

    case "ID_CART":
      return {
        ...state,
        idCart: action.payload,
      };

    case "GET_CART":
      return {
        ...state,
        cart: action.payload,
      };
    case "GET_DETAILS":
      return {
        ...state,
        loader: false,
        detail: action.payload,
      };


    case "GET_PRODUCTS_BY_CATEGORY":
      return {
        ...state,
        productsByName: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
