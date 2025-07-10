import style from "../styles/NavBar.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import cartIcon from "../assets/cart.svg";

export const NavBar = ({ cartItems }) => {
  const [cartNotif, setCartNotif] = useState(false);

  useEffect(() => {
    setCartNotif(cartItems.length > 0);
  }, [cartItems]);

  return (
    <nav>
      <div className={style.navContainer}>
        <div className={style.navTitleRow}>
          <div className={style.deadSpace}></div>
          <Link className={style.title} to="/">
            MyShop
          </Link>
          <div className={style.cartContainer}>
            <Link to="/cart">
              <img src={`${cartIcon}`} alt="" className={style.cart} />
            </Link>
            {cartNotif && <div className={style.circle}></div>}
          </div>
        </div>
        <ol className={style.tabItems}>
          <li>
            <Link className={style.linkStyle} to="/">
              Home
            </Link>
          </li>
          <li>
            <a className={style.linkStyle} href="">
              Updates
            </a>
          </li>
          <li>
            <a className={style.linkStyle} href="">
              Mens Wear
            </a>
          </li>
          <li>
            <a className={style.linkStyle} href="">
              Womens Wear
            </a>
          </li>
          <li>
            <a className={style.linkStyle} href="">
              Shoes
            </a>
          </li>
        </ol>
      </div>
    </nav>
  );
};
