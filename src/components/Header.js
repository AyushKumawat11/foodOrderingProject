import { useState } from "react";
import { Link } from "react-router-dom";
const Title = () => (
  <a href="/">
    <img
      alt="logo"
      className="w-16"
      src="https://cdn-icons-png.flaticon.com/512/4001/4001015.png"
    />
  </a>
);

const style = {
  textDecoration: "none",
  paddingLeft: 13,
  color: "black",
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="flex justify-between bg-sky-200 shadow-lg m-2">
      <Title />
      <div className="nav-item">
        <ul className="flex mt-4">
          <Link to="/" style={style}>
            <li className="px-6">Home</li>
          </Link>
          <Link to="/about" style={style}>
            <li className="px-6">About</li>
          </Link>
          <Link to="/contact" style={style}>
            <li className="px-6">Contact</li>
          </Link>
          <Link to="" style={style}>
            <li className="px-6">Cart</li>
          </Link>
        </ul>
      </div>
      <div className="mt-4">
        {isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)}>LOGOUT</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>LOGIN</button>
        )}
      </div>
    </div>
  );
};

export default Header;
