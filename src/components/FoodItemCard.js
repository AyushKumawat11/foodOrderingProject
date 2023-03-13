import { cloudImgURL } from "../constants";

const FoodItemCard = ({ name, category, price, cloudinaryImageId }) => {
  return (
    <div className="w-56 m-2 shadow-xl ">
      <img src={cloudImgURL + cloudinaryImageId} />
      <h2 className="font-semibold text-xl text-cyan-700">{category}</h2>
      <h1 className="font-extrabold text-lg text-cyan-700">{name}</h1>
      <h3 className="font-semibold text-base text-cyan-700">{price / 100}</h3>
    </div>
  );
};

export default FoodItemCard;
