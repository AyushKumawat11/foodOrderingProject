import { useState } from "react";
import { Link } from "react-router-dom";
const Title = () => (
  <a href="/">
    <img
      alt="logo"
      className="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxc9DTAqOlERTz8whSgUP7-zR3mYZzxlg7Ug&usqp=CAU"
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
    <div className="header">
      <Title />
      <div className="nav-item">
        <ul>
          <Link to="/" style={style}>
            <li>Home</li>
          </Link>
          <Link to="/about" style={style}>
            <li>About</li>
          </Link>
          <Link to="/contact" style={style}>
            <li>Contact</li>
          </Link>
          <Link to="" style={style}>
            <li>Cart</li>
          </Link>
        </ul>
      </div>
      <div className="btn">
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
