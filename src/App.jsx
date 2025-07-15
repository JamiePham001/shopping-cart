import { Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import "./App.css";
import { useState, useEffect } from "react";

// Context API solution: https://www.theodinproject.com/lessons/node-path-react-new-managing-state-with-the-context-api
// a more streamlined solution for sharing data across all levels of components
// without issues of componenet drilling

function App() {
  const [cart, setCart] = useState(() => {
    // try to load from local storage, else start with an empty array
    try {
      const storedItems = localStorage.getItem("shoppingCart");
      return storedItems ? JSON.parse(storedItems) : [];
    } catch (error) {
      console.error("Failed to parse items from localStorage:", error);
      return [];
    }
  });

  // update local storage for any changes to the cart
  useEffect(() => {
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="pageWrapper">
      <NavBar cartItems={cart}></NavBar>
      <main className="pageContent">
        <Outlet context={{ cart, setCart }}></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
