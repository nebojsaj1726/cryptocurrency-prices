import React, { FC } from "react";
import { CoinData } from "../store/types";

interface CoinProps {
  data: CoinData;
}

const Coin: FC<CoinProps> = ({ data }) => {
  return (
    <section className="section">
      <div className="container has-text-light">
        <h1
          className="title has-text-light"
          style={{ marginBottom: 50, letterSpacing: 1.4 }}
        >
          {data.name}
        </h1>
        <div className="level" style={{ alignItems: "flex-start" }}>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading mb-3">Symbol</p>
              <p className="title is-4 has-text-light">{data.symbol}</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading mb-3">Price</p>
              <div className="title is-4 has-text-light">
                <p>
                  {Math.round(data.price)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  $
                </p>
              </div>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading mb-3">Last 24h</p>
              <p className="title is-4 has-text-light">{data.delta_24h}%</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading mb-3">Market Cap</p>
              <p className="title is-4 has-text-light">
                {(data.market_cap / 1000000000).toFixed(2)}B
              </p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading mb-3">Volume 24h</p>
              <p className="title is-4 has-text-light">
                {(data.total_volume_24h / 1000000).toFixed(2)}M
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coin;
