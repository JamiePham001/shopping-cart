# 🛒 React E-Commerce Cart Demo

This project is a basic **React-based e-commerce site** focused on practicing routing and shopping cart logic. It demonstrates foundational React concepts, especially **React Router v6**, along with dynamic data handling, local UI state management, and responsive layout techniques.

## ✨ Project Purpose

This was built as a learning exercise to solidify knowledge of:

- React Router (`react-router-dom`)
- `useState`, `useEffect`, and `useOutletContext`
- Passing props across nested components
- Conditional rendering and client-side navigation
- Styling with CSS Modules
- Dynamic routing and slugified URLs
- Managing shared state (e.g., cart) between components

---

## 🔁 Routing

The project uses `react-router-dom` with the following routes:

- `/` → Home Page with product listing
- `/products/:name` → Dynamic Product Page
- `/cart` → Shopping Cart Page

Routing is centralized in a `routes` file and nested inside a layout using `<Outlet>` so that shared components like `<NavBar>` and `<Footer>` persist across pages.

---

## 🛍️ Cart Functionality

- Cart state (`cart`) is lifted to the top-level (`App.jsx`) and passed using `useOutletContext`.
- `addToCart()` checks for duplicate items using a utility function and merges quantities.
- A visual cart icon appears in the NavBar with a red notification dot if items exist.
- Quantity selection is handled using a custom `QuantitySelect` component.
- Updates to the quantity are reflected live in the cart, with safeguards to avoid invalid values or rerender bugs.

---

## ⚙️ Core Features

- **Dynamic Routing**: Product pages are generated based on slugified product titles.
- **Shared Layout**: `NavBar` and `Footer` persist across pages using nested routes.
- **State Propagation**: State is shared between sibling components using `useOutletContext`.
- **Image and Layout Handling**: Uses `object-fit`, `flex`, and `aspect-ratio` to maintain responsive visuals.
- **Visual Feedback**: The cart icon animates and notifies users of activity.
- **Persistent Storage**: localStorage is used to maintain persistent storage of stored items in the home page and shopping cart. Loading of home page items will be instataneous and shopping cart items will remain on page reload.

---

## 🧪 Lessons Learned

- Avoid mutating state directly (`Array.push()` inside `setState`) to prevent React bugs.
- React's `useState` updates are asynchronous — `useEffect` can be used for syncing.
- Position `absolute` should be used for floating UI (like notification badges) to avoid layout shifts.
- Sharing state across components not directly nested requires context or smart route architecture.
- Responsive image containers need `max-width`, `max-height`, and `object-fit` for reliable behavior.

---

## 🚧 Limitations / Next Steps

- No actual backend or persistent storage — data is fetched from a static API.
- The cart resets on full-page reloads.
- Could benefit from a global state manager (e.g., Redux, Zustand) for larger-scale cart features.
- No user login/auth flows yet.
- No payment or checkout system.

---

## 🛠 Tech Stack

- **React** (Vite)
- **React Router v6**
- **CSS Modules**
- **ESLint + React Hooks Best Practices**

## Potential Bugs

- Inside the CartContainer.jsx file, there is a warning in regards to the missing dependencies inside the useEffect. Adding these dependencies fixes the warnings, but causes majors errors. The issue is likely due to the fundamental implementation of QuantitySelect.jsx.
