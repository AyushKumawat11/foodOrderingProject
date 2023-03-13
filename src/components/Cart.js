import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import FoodItemCard from "./FoodItemCard";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <div className="m-2">
        <button
          className="bg-blue-300 m-2 py-1 px-5 rounded-lg text-white font-semibold shadow-md hover:bg-blue-700"
          onClick={() => handleClearCart()}
        >
          CLEARCART
        </button>
      </div>

      <div className="m-2 flex flex-wrap">
        {/* <h1>{cartItems.length}</h1> */}
        {cartItems.map((item) => (
          <FoodItemCard key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};

export default Cart;
