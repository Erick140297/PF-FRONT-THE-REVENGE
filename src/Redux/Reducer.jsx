// rootreducer

const initialState = {
  allProducts: [],
  productsByName: [],
  user: {},
  cart:{},
  idCart:""
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
    default:
      return state;
  }
}

export default rootReducer;
