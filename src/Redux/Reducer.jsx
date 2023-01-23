// rootreducer

const initialState = {
  allProducts: [],
  productsByName: [],
  loader:true
  user: {},
  cart:{}
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ALL_PRODUCTS":
      return {
        ...state,
        loader:false,
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
      return{
        ...state,
        loader:true
      }

    case "POST_USER":
      return {
        ...state,
        user: action.payload,
      };

      case "ADD_TO_CART":
      return {
        ...state,
        cart: action.payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
