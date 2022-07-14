import Wrapper from "../assets/wrappers/Featured";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";
import { useState, useEffect } from "react";
import axios from "axios";

const Featured = () => {
  const [gecko, setGecko] = useState(null);
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false";

  const fetchData = async () => {
    try {
      const { data } = await axios.get(url);
      setGecko(data);
    } catch (error) {
      return Promise.reject(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Wrapper id="featured">
      <div className="container">
        <div className="left">
          <h1> Explore Top Crypto as Bitcoin, Ethereum, BNB</h1>
          <p> See all available tokens. Build your future today.</p>
          <button className="btn">See More Coins</button>
        </div>

        <div className="right">
          {gecko?.map((crypto, index) => (
            <div className="card" key={index}>
              <div className="img-container">
                <img src={crypto.image} alt={crypto.name} />
              </div>
              <div>
                <h5>{crypto.name}</h5>
                <p>${crypto.current_price.toLocaleString()}</p>
              </div>

              <span
                className={
                  crypto.price_change_percentage_24h > 0 ? "green" : "red"
                }
              >
                {crypto.price_change_percentage_24h > 0 ? (
                  <FiArrowDown className="icon" />
                ) : (
                  <FiArrowUp className="icon" />
                )}
                {crypto.price_change_percentage_24h.toFixed(2)}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Featured;
