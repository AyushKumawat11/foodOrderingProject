import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { cloudImgURL } from "../constants";
import { addItem } from "../utils/cartSlice";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const params = useParams();
  const { resid } = params;
  const restaurant = useRestaurantMenu(resid);

  const dispatch = useDispatch();

  // const handleAddItem = () => {
  //   dispatch(addItem("Orange"));
  // };

  const addFoodItems = (item) => {
    dispatch(addItem(item));
  };

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

      {/* <div className="m-2">
        <button
          className="cursor-pointer bg-orange-500"
          onClick={() => handleAddItem()}
        >
          ADD
        </button>
      </div> */}

      <div className="m-2">
        <h1 className="font-extrabold text-2xl text-cyan-700 ml-2">MENU</h1>
        <ul className="ml-2">
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id} className="font-medium text-base">
              {item.name} -
              <button
                className="cursor-pointer  text-cyan-700 hover:text-pink-800 text-lg font-bold"
                onClick={() => addFoodItems(item)}
              >
                ADD
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
