import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="m-2">
      <h1 className="font-extrabold text-2xl">Footer</h1>
      <h1 className="font-bold text-2xl text-pink-700">
        {user.name} - {user.email}
      </h1>
    </div>
  );
};

export default Footer;
