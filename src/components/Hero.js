import Wrapper from "../assets/wrappers/Hero";
import hero from "../assets/images/hero.png";

const Hero = () => {
  return (
    <Wrapper id="hero">
      <div className="container">
        <div className="left">
          <p>Buy & Sell Crypto 24/7 from anywhere</p>
          <h1>
            Invest in Crypto <span className="primary">Today!</span>
          </h1>
          <p>Buy, Sell, Trade thousands of cryptocurrencies</p>
          <div className="input-container">
            <input type="email" placeholder="Enter your email" />
            <button className="btn">Learn More</button>
          </div>
        </div>

        <div className="right">
          <div className="img-container">
            <img src={hero} alt="Crypto" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
