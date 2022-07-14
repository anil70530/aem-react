import {
  FETCH_ERROR,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_CATEGORY,
  FETCH_PRODUCT_SORT_ASC,
  FETCH_PRODUCT_SORT_DSEC,
  FETCH_PRODUCT_REQUEST_BY_ID
} from "../types";

const initialState = {
  loading: false,
  productItem: [],
  productCategory: [],
  errors: "",
};

const productReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case

  switch (action.type) {

    case FETCH_PRODUCT_REQUEST:
      return { ...state, productItem: action.data, error: "" };

    case FETCH_PRODUCT_CATEGORY:
      return { ...state, productCategory: action.data, error: "" };
      case FETCH_PRODUCT_REQUEST_BY_ID:
        return { ...state, productItemId: action.data, error: "" };
    case FETCH_PRODUCT_SORT_ASC:
      return  {...state, productItem: state.productItem.sort((a, b) => (a.id - b.id)), error: "" };

      case FETCH_PRODUCT_SORT_DSEC:
      return  {...state, productItem: state.productItem.sort((a, b) => (b.id - a.id)), error: "" };

    case FETCH_ERROR:
      return { ...state, productItem: [], error: action.data };
    default:
      return state;
  }
};
export default productReducer;
