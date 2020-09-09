import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

import { RootState } from "./store";
import Search from "./components/Search";
import Alert from "./components/Alert";
import Coin from "./components/Coin";
import { setAlert } from "./store/actions/alertActions";
import { setError } from "./store/actions/coinActions";

const App: FC = () => {
  const dispatch = useDispatch();
  const coinData = useSelector((state: RootState) => state.coin.data);
  const loading = useSelector((state: RootState) => state.coin.loading);
  const error = useSelector((state: RootState) => state.coin.error);
  const alertMsg = useSelector((state: RootState) => state.alert.message);

  return (
    <div className="has-text-centered has-background-dark has-text-light">
      <Search text="Enter cryptocurrency symbol (BTC, ETH, USDT...)" />
      {loading ? (
        <h2 className="is-size-3 py-2">Loading...</h2>
      ) : (
        coinData && <Coin data={coinData} />
      )}
      {alertMsg && (
        <Alert message={alertMsg} onClose={() => dispatch(setAlert(""))} />
      )}
      {error && <Alert message={error} onClose={() => dispatch(setError())} />}
    </div>
  );
};

export default App;
