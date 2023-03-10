import { useState, useEffect } from "react";

const useRestaurantMenu = (resid) => {
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

  return restaurant;
};

export default useRestaurantMenu;
