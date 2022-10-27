const initialState = {
  isLoading: false,
  hasError: false,
  productData: null,
};

export const GOT_PRODUCTDATA_SUCCESS = "GOT_PRODUCTDATA_SUCCESS";
export const GOT_PRODUCTDATA_PENDING = "GOT_PRODUCTDATA_PENDING";
export const GOT_PRODUCTDATA_ERROR = "GOT_PRODUCTDATA_ERROR";

function productReducer(state = initialState, action) {
  switch (action.type) {
    case GOT_PRODUCTDATA_PENDING:
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    case GOT_PRODUCTDATA_SUCCESS:
      return {
        ...state,
        productData: action.payload,
        isLoading: false,
        hasError: false,
      };
    case GOT_PRODUCTDATA_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    default:
      return state;
  }
}
export default productReducer;
