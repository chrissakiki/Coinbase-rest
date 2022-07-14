import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Wrapper from "../assets/wrappers/Navbar";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <Wrapper>
      <div className="container">
        <h2>
          Coin<span className="primary">Base</span>
        </h2>

        <div className={click ? "nav-menu active" : "nav-menu"}>
          <a onClick={handleClick} href="/#hero" className="nav-link">
            Home
          </a>
          <a onClick={handleClick} href="/#featured" className="nav-link">
            Featured
          </a>
          <a onClick={handleClick} href="/#earn" className="nav-link">
            Earn
          </a>
          <a onClick={handleClick} href="/#footer" className="nav-link">
            Contact
          </a>

          <button className="btn-primary">Connect</button>
        </div>
      </div>

      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={25} className="ham-icon" />
        ) : (
          <FaBars size={25} className="ham-icon" />
        )}
      </div>
    </Wrapper>
  );
};

export default Navbar;
