import React from "react";
import Wrapper from "../assets/wrappers/Earn";
import trade from "../assets/images/trade.png";
const Earn = () => {
  return (
    <Wrapper id="earn">
      <div className="container">
        <div className="left">
          <img src={trade} alt="signup" />
        </div>

        <div className="right">
          <h1>Earn passive income with crypto.</h1>
          <p>
            Double your earning this month with more than 20+ digital assets.
            What are you waiting for?
          </p>
          <div className="input-container">
            <input type="email" placeholder="Enter your email" />
            <button className="btn">Learn More</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Earn;
