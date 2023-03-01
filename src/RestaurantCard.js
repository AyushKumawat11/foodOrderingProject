import { cloudImgURL } from "./constants";

const RestaurantCard = ({
  name,
  cuisines,
  totalRatingsString,
  cloudinaryImageId,
}) => {
  return (
    <div className="card">
      <img src={cloudImgURL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{totalRatingsString}</h4>
    </div>
  );
};

export default RestaurantCard;
