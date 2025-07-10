import style from "../styles/Home.module.css";
import { Card } from "../components/Card";
import { FetchData } from "../functions/FetchData";
import { useEffect, useState } from "react";

export const Home = () => {
  const [items, setitems] = useState([]);
  const { data, error, loading } = FetchData();

  // load localstorage on mount
  useEffect(() => {
    const storedItems = localStorage.getItem("homeItems");

    if (storedItems) {
      try {
        const parsedItems = JSON.parse(storedItems);
        setitems(parsedItems);
      } catch (error) {
        console.error("Failed to parse items from localStorage:", error);
      }
    }
  }, []);

  // once API data is fetched, update the state and save to localstorage
  useEffect(() => {
    if (!loading && data) {
      const firstNine = data.slice(0, 9);
      setitems(firstNine);
      localStorage.setItem("homeItems", JSON.stringify(firstNine));
    }
  }, [loading, data]);

  if (error) return <p>A network error was encountered</p>;

  return (
    <div className={style.page}>
      {/* page carousel banner */}
      <div className={style.banner}></div>
      {/* grid of items */}
      <div className={style.container}>
        <section className={style.productSection}>
          <span className={style.subheading}>Featured Collection</span>
          <div className={style.productsContainer}>
            {items.map((item, index) => (
              <Card object={item} key={index}></Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
