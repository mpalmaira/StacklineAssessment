import axios from "axios";
import {
  GOT_PRODUCTDATA_ERROR,
  GOT_PRODUCTDATA_PENDING,
  GOT_PRODUCTDATA_SUCCESS,
} from "./index";

export const getProduct = () => async (dispatch) => {
  try {
    dispatch({ type: GOT_PRODUCTDATA_PENDING });
    const { data } = await axios("data.json");
    dispatch({
      type: GOT_PRODUCTDATA_SUCCESS,
      payload: data[0],
    });
  } catch (err) {
    dispatch({
      type: GOT_PRODUCTDATA_ERROR,
      payload: err,
    });
  }
};
