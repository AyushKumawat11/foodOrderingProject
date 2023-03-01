import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cloudImgURL } from "../constants";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const params = useParams();
  const { resid } = params;
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=22.68619519929841&lng=75.86905371397734&menuId=" +
        resid
    );
    const json = await data.json();
    setRestaurant(json?.data);
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restaurant id: {resid}</h1>
        <img src={cloudImgURL + restaurant?.cloudinaryImageId} />
        <h2>{restaurant?.name}</h2>
        <h2>{restaurant?.area + " , " + restaurant?.city}</h2>
        <h3>{restaurant?.cuisines}</h3>
        <h3>{restaurant?.costForTwoMsg}</h3>
        <h3>{restaurant?.avgRating} stars</h3>
      </div>
      <div>
        <h1>MENU</h1>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
