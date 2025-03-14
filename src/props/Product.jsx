import React from "react";

// Parent Component
const Product = () => {
  return (
    <>
      <Child name="Laptop" price={30_000} />
    </>
  );
};

// Child Component
const Child = (props) => {
  const { name, price } = props;
  return (
    <>
      <p>Product: {name}</p>
      <p>Price: ${price}</p>
    </>
  );
};

// Export Parent Component
export default Product;
