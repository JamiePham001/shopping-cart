import style from "../styles/Card.module.css";
import { Link } from "react-router-dom";
import { CheckDecimal } from "../functions/checkDecimal";
import { Slugify } from "../functions/Slugify";

export const Card = ({ object }) => {
  return (
    <Link
      to={`/products/${Slugify(object.title)}`}
      className={style.card}
      state={object}
    >
      <div className={style.imageContainer}>
        <img className={style.image} src={object.image} alt="" />
      </div>
      <div className={style.desc}>
        <div className={style.itemName}>
          <b>{object.title}</b>
        </div>
        <div className={style.price}>${CheckDecimal(object.price)}</div>
      </div>
    </Link>
  );
};
