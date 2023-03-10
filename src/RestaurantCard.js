import { cloudImgURL } from "./constants";

const RestaurantCard = ({
  name,
  cuisines,
  totalRatingsString,
  cloudinaryImageId,
}) => {
  return (
    <div className="w-56 h-96 m-2 shadow-xl">
      <img src={cloudImgURL + cloudinaryImageId} />
      <h2 className="font-bold text-2xl p-2">{name}</h2>
      <h3 className="font-medium text-lg p-2">{cuisines.join(", ")}</h3>
      <h4 className="font-medium text-sm p-2">{totalRatingsString}</h4>
    </div>
  );
};

export default RestaurantCard;
