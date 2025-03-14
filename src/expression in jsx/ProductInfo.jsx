import React from "react";

const ProductInfo = () => {
  const product = {
    name: "laptop",
    price: 1200,
    availability: "In Stock",
  };
  const { name, price, availability } = product;
  return (
    <>
      <h1>product Information</h1>
      <p>Name: {name}</p>
      <p>Price: ${price}</p>
      <p>Availability: {availability}</p>
    </>
  );
};

export default ProductInfo;
