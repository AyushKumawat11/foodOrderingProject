import { useParams } from "react-router-dom";
import { cloudImgURL } from "../constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const params = useParams();
  const { resid } = params;
  const restaurant = useRestaurantMenu(resid);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex m-2">
      <div>
        <h1 className="font-extrabold text-2xl  text-cyan-700 p-2">
          Restaurant id: {resid}
        </h1>
        <img src={cloudImgURL + restaurant?.cloudinaryImageId} />
        <h2 className="font-bold text-2xl  text-cyan-700 p-2">
          {restaurant?.name}
        </h2>
        <h2 className="font-bold text-xl p-2">
          {restaurant?.area + " , " + restaurant?.city}
        </h2>
        <h3 className="font-bold text-lg p-2">{restaurant?.cuisines}</h3>
        <h3 className="font-bold text-base p-2">{restaurant?.costForTwoMsg}</h3>
        <h3 className="font-bold text-sm p-2">{restaurant?.avgRating} stars</h3>
      </div>

      <div className="m-2">
        <h1 className="font-extrabold text-2xl text-cyan-700 ml-2">MENU</h1>
        <ul className="ml-2">
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id} className="font-medium text-base">
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
