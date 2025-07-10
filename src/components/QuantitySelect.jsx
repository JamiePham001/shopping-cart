import { useEffect, useState } from "react";
import style from "../styles/QuantitySelect.module.css";

export const QuantitySelect = ({ setItemQuantity, quantity = 1 }) => {
  const [value, setValue] = useState(quantity);

  const subtract = () => {
    if (value === 1) {
      return;
    } else {
      setValue(value - 1);
    }
  };

  const add = () => {
    setValue((prev) => {
      const current = parseInt(prev, 10);
      return isNaN(current) ? 1 : current + 1;
    });
  };

  useEffect(() => {
    if (value !== "") {
      setItemQuantity(value);
    } else {
      setItemQuantity(1);
    }
  }, [value, setItemQuantity]);

  return (
    <div className={style.container}>
      <button
        className={style.button}
        onClick={() => {
          subtract();
        }}
      >
        -
      </button>
      <input
        type="number"
        className={style.inputBox}
        value={value}
        onChange={(e) => {
          const num = parseInt(e.target.value, 10);
          if (!isNaN(num)) {
            setValue(num);
          } else {
            setValue("");
          }
        }}
      />
      <button
        className={style.button}
        onClick={() => {
          add();
        }}
      >
        +
      </button>
    </div>
  );
};
