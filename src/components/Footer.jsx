import style from "../styles/Footer.module.css";

export const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footerContainer}>
        <div className={style.socials}>
          <a href="" className={style.facebook}></a>
          <a href="" className={style.instagram}></a>
        </div>
        <div className={style.copyright}>
          &#169;{" "}
          <a href="" className={style.shopLink}>
            MyShop
          </a>{" "}
          2025
        </div>
      </div>
    </div>
  );
};
