import { ThunkAction } from "redux-thunk";
import { RootState } from "../index";
import {
  CoinAction,
  CoinData,
  GET_COIN,
  SET_LOADING,
  SET_ERROR,
} from "../types";

export const getCoin = (
  currsymbol: string
): ThunkAction<void, RootState, null, CoinAction> => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        `https://coinlib.io/api/v1/coin?key=${process.env.REACT_APP_API_KEY}&symbol=${currsymbol}`
      );
      if (!res.ok) {
        throw new Error("Cryptocurrency not found");
      }

      const resData: CoinData = await res.json();
      dispatch({
        type: GET_COIN,
        payload: resData,
      });
    } catch (err) {
      dispatch({
        type: SET_ERROR,
        payload: err.message,
      });
    }
  };
};

export const setLoading = (): CoinAction => {
  return {
    type: SET_LOADING,
  };
};

export const setError = (): CoinAction => {
  return {
    type: SET_ERROR,
    payload: "",
  };
};
