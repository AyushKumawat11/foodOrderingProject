import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="m-2">
      <h1 className="font-bold text-lg text-rose-700">{user.name}</h1>
      <h1 className="font-bold text-lg text-rose-700">{user.email}</h1>
    </div>
  );
};

export default Profile;
