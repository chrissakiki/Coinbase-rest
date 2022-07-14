import Wrapper from "../assets/wrappers/Footer";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <Wrapper id="footer">
      <div className="container">
        <div className="col col-1">
          <h2>
            Coin<span className="primary">Base</span>
          </h2>
        </div>
        <div className="col">
          <h5>Support</h5>
          <span className="bar"></span>
          <a href="/">Contact us</a>
          <a href="/">Chat</a>
          <a href="/">Help Center</a>
          <a href="/">Contact US</a>
          <a href="/">FAQ</a>
        </div>
        <div className="col">
          <h5>Developers</h5>
          <span className="bar"></span>
          <a href="/">Cloud</a>
          <a href="/">Commerce</a>
          <a href="/">Pro</a>
          <a href="/">Lorem</a>
          <a href="/">Lorem</a>
        </div>
        <div className="col">
          <h5>Company</h5>
          <span className="bar"></span>
          <a href="/">About</a>
          <a href="/">Information</a>
          <a href="/">Legal</a>
          <a href="/">Privacy</a>
          <a href="/">Lorem</a>
        </div>
        <div className="col">
          <h5>Social</h5>
          <span className="bar"> </span>
          <a href="/">
            <FaFacebook className="icon" />
          </a>
          <a href="/">
            <FaGithub className="icon" />
          </a>
          <a href="/">
            <FaLinkedin className="icon" />
          </a>
          <a href="/">
            <FaTwitter className="icon" />
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
