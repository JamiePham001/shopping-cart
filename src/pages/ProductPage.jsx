import style from "../styles/ProductPage.module.css";
import {
  useLocation,
  useOutletContext,
  useParams,
  Link,
} from "react-router-dom";
import { CheckDecimal } from "../functions/CheckDecimal";
import { QuantitySelect } from "../components/QuantitySelect";
import { Slugify } from "../functions/Slugify";
import { useState } from "react";
import { checkDuplicateCartItems } from "../functions/checkDuplicateCartItems";

export const ProductPage = () => {
  const { name } = useParams();
  const location = useLocation();
  const product = location.state;
  const { cart, setCart } = useOutletContext();
  const [itemQuantity, setItemQuantity] = useState(null);
  const [itemAdded, setItemAdded] = useState(false);

  if (!product) return <p>Product not found.</p>;

  let productClone = product;

  const addToCart = () => {
    const quantityObj = { quantity: itemQuantity };
    productClone = { ...productClone, ...quantityObj };
    const scannedArray = checkDuplicateCartItems(cart, productClone);

    setCart(scannedArray);
    setItemAdded(true);
  };

  return (
    <>
      {name === Slugify(product.title) && (
        <div className={style.page}>
          <div className={style.imageContainer}>
            <img
              src={product.image}
              alt="product image"
              className={style.image}
            />
          </div>
          <section className={style.itemInfo}>
            <div>
              <div className={style.title}>
                <b>{product.title}</b>
              </div>
              <div className={style.price}>${CheckDecimal(product.price)}</div>
            </div>

            <div className={style.desc}>{product.description}</div>
            <QuantitySelect setItemQuantity={setItemQuantity}></QuantitySelect>
            <button className={style.addBtn} onClick={addToCart}>
              Add to cart
            </button>
            {itemAdded && (
              <div className={style.successMessage}>
                Added to cart!{" "}
                <Link to="/cart" className={style.messageLink}>
                  View cart
                </Link>{" "}
                or{" "}
                <Link to="/" className={style.messageLink}>
                  continue shopping
                </Link>
              </div>
            )}
          </section>
        </div>
      )}
    </>
  );
};
