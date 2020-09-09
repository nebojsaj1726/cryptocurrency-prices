import {
  CoinState,
  CoinAction,
  GET_COIN,
  SET_LOADING,
  SET_ERROR,
} from "../types";

const initialState: CoinState = {
  data: null,
  loading: false,
  error: "",
};

export default (state = initialState, action: CoinAction): CoinState => {
  switch (action.type) {
    case GET_COIN:
      return {
        data: action.payload,
        loading: false,
        error: "",
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
