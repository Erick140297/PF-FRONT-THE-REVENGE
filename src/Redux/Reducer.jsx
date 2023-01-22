// rootreducer

const initialState = {
  allProducts: [],
  productsByName: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ALL_PRODUCTS":
      return {
        ...state,
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

    default:
      return state;
  }
}

export default rootReducer;
