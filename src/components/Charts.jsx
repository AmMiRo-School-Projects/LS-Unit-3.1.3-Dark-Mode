import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Chart from "./Chart";

const Charts = () => {
  const [coin, setCoin] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${id}?sparkline=true`)
      .then(res => {
        console.log("res", res);
        setCoin(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  console.log("coin", coin);
  if (!coin) {
    return <h2>Loading...</h2>;
  } else {
    return (
      <div className="charts">
        <div className="chart__container">
          <h2 className="coin__title">{coin.name}</h2>
          <h4 className="coin__symbol">{coin.symbol}</h4>
          <div className="coin__logo">
            <img src={coin.image.large} height="40" alt={coin.name} />
          </div>
          <Chart sparklineData={coin.market_data.sparkline_7d.price} />
        </div>
      </div>
    );
  }
};
export default Charts;
