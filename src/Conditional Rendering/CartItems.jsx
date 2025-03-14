import React from "react";

const CartItems = () => {
  //   const items = [];
  //   const items = ["Earbuds", "New SSD", "Hoddie"];
  const items = ["Earbuds", "Power Bank", "New SSD", "Hoddie"];
  return (
    <>
      <h1>Cart 🛒</h1>
      {items.length > 0 && <p>You have {items.length} items in your cart.</p>}
      <h2>Your Items</h2>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default CartItems;
