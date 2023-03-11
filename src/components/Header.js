import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
const Title = () => (
  <a href="/">
    <img
      alt="logo"
      className="w-16"
      src="https://cdn-icons-png.flaticon.com/512/4001/4001015.png"
    />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const { user } = useContext(UserContext);

  return (
    <div className="flex justify-between bg-sky-200 shadow-lg m-2">
      <Title />
      <div className="nav-item">
        <ul className="flex mt-4">
          <Link to="/">
            <li className="px-6 hover:text-fuchsia-700 ">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-6 hover:text-fuchsia-700">About</li>
          </Link>
          <Link to="/contact">
            <li className="px-6 hover:text-fuchsia-700">Contact</li>
          </Link>
          <Link to="">
            <li className="px-6 hover:text-fuchsia-700">Cart</li>
          </Link>
          <Link to="/instamart">
            <li className="px-6 hover:text-fuchsia-700">Instamart</li>
          </Link>
        </ul>
      </div>
      <div className="flex">
        <h1 className="font-bold text-lg text-pink-800 mr-4 mt-5">
          {user.name}
        </h1>
        {isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)} className="mt-2">
            LOGOUT
          </button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)} className="mt-2">
            LOGIN
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
