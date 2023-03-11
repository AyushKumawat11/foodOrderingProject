import { useEffect, useState } from "react";
import { RestaurantList } from "../constants";
import RestaurantCard from "../RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

function filterData(txtInput, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(txtInput.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [allRestaurants, setAllRestaurant] = useState(null);
  const [filterRestaurants, setFilterRestaurant] = useState({});
  const [txtInput, setTxtInput] = useState("");

  useEffect(() => {
    getRestaurantApi();
  }, []);

  async function getRestaurantApi() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.68619519929841&lng=75.86905371397734&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // ? = optional chaining
    setFilterRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }

  const isOnline = useOnline();
  if (!isOnline) {
    return (
      <h1 className="font-bold text-lg text-red-700">
        Offilne, please check your internet connection
      </h1>
    );
  }

  if (filterRestaurants.length === 0) {
    return <h1>😒No Restaurant Found😒</h1>;
  }

  return !allRestaurants ? (
    <Shimmer />
  ) : (
    <>
      <div className="input-div">
        <input
          type="text"
          className="shadow-md focus-visible:bg-gray-200 m-2"
          value={txtInput}
          placeholder="Search Restaurant"
          onChange={(e) => {
            setTxtInput(e.target.value);
          }}
        />
        <button
          className="bg-blue-300 m-2 py-1 px-5 rounded-lg text-white font-semibold shadow-md hover:bg-blue-700"
          onClick={() => {
            const data = filterData(txtInput, allRestaurants);

            setFilterRestaurant(data);
          }}
        >
          SEARCH
        </button>
      </div>
      <div className="flex flex-wrap">
        {filterRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
