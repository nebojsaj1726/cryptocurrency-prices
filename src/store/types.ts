export const GET_COIN = "GET_WEATHER";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";
export const SET_ALERT = "SET_ALERT";

// export interface Weather {
//   description: string;
//   icon: string;
//   id: number;
//   main: string;
// }

export interface CoinData {
  name: string;
  symbol: string;
  price: number;
  delta_24h: number;
  market_cap: number;
  total_volume_24h: number;
}

export interface CoinState {
  data: CoinData | null;
  loading: boolean;
  error: string;
}

interface GetCoinAction {
  type: typeof GET_COIN;
  payload: CoinData;
}

interface SetLoadingAction {
  type: typeof SET_LOADING;
}

interface SetErrorAction {
  type: typeof SET_ERROR;
  payload: string;
}

export type CoinAction = GetCoinAction | SetLoadingAction | SetErrorAction;

export interface AlertAction {
  type: typeof SET_ALERT;
  payload: string;
}

export interface AlertState {
  message: string;
}
