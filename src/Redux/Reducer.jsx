// rootreducer

const initialState = {
  allProducts: [],
  productsFiltrados: [],
  loader: true,
  user: {},
  cart: {},
  idCart: "",
  personalData: {},
  AllOrders: [],
  myOrders: [],
  order: {},
  sideBar: false,
  Admin: [],
  detail: {},
  usersAdmin: [],
  error: {},
  orders:[]
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
        loader: false,
        productsFiltrados: action.payload,
      };

    case "GET_PRODUCTS_BY_SUBCATEGORY":
      return {
        ...state,
        loader: false,
        productsFiltrados: action.payload,
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
        productsFiltrados: action.payload,
      };

    case "CLEAN_RESULT":
      return {
        ...state,
        loader: false,
        productsFiltrados: [],
      };
    case "CLEAN_DETAIL":
      return {
        ...state,
        loader: false,
        detail: {},
      };
    case "GET_ALL_USER":
      return {
        ...state,
        usersAdmin: action.payload,
      };

    case "USER_DATA":
      return {
        ...state,
        personalData: action.payload,
      };
    case "NEW_ADMIN":
      return {
        ...state,
      };
    case "GET_ALL_ORDERS":
      return {
        ...state,
        AllOrders: action.payload,
      };

    case "TOGGLE_SIDEBAR":
      return {
        ...state,
        sideBar: state.sideBar === false ? true : false,
      };
    case "UPDATE_PROFILE":
      return {
        ...state,
        personalData: action.payload,
      };
    case "GET_INFO_USER":
      return {
        ...state,
        Admin: action.payload,
      };
    case "USER_DISABLED":
      return {
        ...state,
      };
      case 'UPDATE_USER':
        return {
          ...state,
          };
        case 'UPDATE_USER_ERROR':
        return {
          ...state,
        };
    case "GET_MY_ORDERS":
      return {
        ...state,
        myOrders: action.payload,
      };
      case "CHANGE_ORDER_STATUS":
        return {
        ...state,
        orders: state.orders.map(order => {
        if (order._id === action.payload._id) {
        return {
        ...order,
        status: action.payload.status
        };
        }
        return order;
        })
        };
    case "GET_ORDER":
      return {
        ...state,
        order: action.payload,
      };
      case "DELETE_PURCHASE_ORDER":
      return {
        ...state,
      };
      case "DELETE_PURCHASE_ORDER_SUCCESS":
      return {
        ...state,
      };
      case "DELETE_PURCHASE_ORDER_ERROR":
      return {
        ...state,
      };
      case "DELETE_USER":
      return {
        ...state,
      };
      case "DELETE_USER_SUCCESS":
      return {
        ...state,
      };
      case "DELETE_USER_ERROR":
      return {
        ...state,
      };
      case "DELETE_PRODUCT":
      return {
        ...state,
      };
      case "DELETE_PRODUCT_SUCCESS":
      return {
        ...state,
      };
      case "DELETE_PRODUCT_ERROR":
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default rootReducer;
