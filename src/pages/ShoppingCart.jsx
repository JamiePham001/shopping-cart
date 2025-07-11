import style from "../styles/ShoppingCart.module.css";
import { CartContainer } from "../components/CartContainer";
import { useOutletContext, Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <>
      <div className={style.cartMsg}>Your cart is empty</div>
      <Link to="/">
        <button className={style.shoppingBtn}>Continue Shopping</button>
      </Link>
    </>
  );
};

export const ShoppingCart = () => {
  const { cart } = useOutletContext();

  return (
    <div className={style.page}>
      <div className={style.shoppingCart}>
        {cart.length === 0 ? (
          <EmptyCart></EmptyCart>
        ) : (
          <CartContainer></CartContainer>
        )}
      </div>
    </div>
  );
};
