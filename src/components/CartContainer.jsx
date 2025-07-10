import style from "../styles/CartContainer.module.css";
import { QuantitySelect } from "../components/QuantitySelect";
import { useOutletContext, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { CheckDecimal } from "../functions/checkDecimal";
import { Slugify } from "../functions/Slugify";

const CartItem = ({ object, setCart, cart }) => {
  const [itemQuantity, setItemQuantity] = useState(object.quantity);

  // For any inconsistent behavior regarding cart data, resolve this warning.
  useEffect(() => {
    const updatedCart = cart.map((item) => {
      if (!item) return item;

      return item.id === object.id ? { ...item, quantity: itemQuantity } : item;
    });

    setCart(updatedCart);
    // adding necessary dependencies causes infinite renders
  }, [itemQuantity]);

  const deleteItem = () => {
    const updatedCart = cart.filter((item) => item.id !== object.id);
    setCart(updatedCart);
  };

  return (
    <div className={style.cartItem}>
      <div className={style.colGroup}>
        <Link
          className={style.imgContainer}
          to={`/products/${Slugify(object.title)}`}
          state={object}
        >
          <img src={object.image} className={style.itemImg}></img>
        </Link>
        <div className={style.itemDesc}>
          <div className={style.itemName}>
            <b>{object.title}</b>
          </div>
          <div className={style.price}>${CheckDecimal(object.price)}</div>
          <div className={style.price}>Category: {object.category}</div>
        </div>
      </div>
      <div className={style.colGroup}>
        <QuantitySelect
          setItemQuantity={setItemQuantity}
          quantity={itemQuantity}
        ></QuantitySelect>
        <button className={style.deleteBtn} onClick={deleteItem}></button>
      </div>

      <div className={style.totalPrice}>
        ${CheckDecimal(object.price * object.quantity)}
      </div>
    </div>
  );
};

export const CartContainer = () => {
  const { cart, setCart } = useOutletContext();
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    let total = 0;
    cart.map((item) => {
      total += item.price * item.quantity;
    });
    setSubtotal(total);
  }, [cart]);

  return (
    <section className={style.cart}>
      <div className={style.itemContainer}>
        <div className={style.cartHeading}>
          <div className={style.heading}>Your cart</div>
        </div>
        <div className={style.cartTable}>
          <div className={style.labels}>
            <div className={style.label}>PRODUCT</div>
            <div className={style.label}>QUANTITY</div>
            <div className={style.label}>TOTAL</div>
          </div>
          {/* render CartItem */}
          {cart.map((object) => (
            <CartItem
              object={object}
              key={object.id}
              setCart={setCart}
              cart={cart}
            ></CartItem>
          ))}
        </div>
      </div>
      <div className={style.checkout}>
        <div className={style.subtotalContainer}>
          <div>Subtotal</div>
          <div className={style.subtotal}>${CheckDecimal(subtotal)}</div>
        </div>
        <button className={style.checkoutBtn}>Check out</button>
      </div>
    </section>
  );
};
