import React from "react";

const ProductList = () => {
  const products = [
    { id: 1, name: "Laptop", price: "$1200" },
    { id: 2, name: "Computer", price: "$1900" },
    { id: 3, name: "Tablet", price: "$2500" },
  ];

  return (
    <main>
      {products.map((p) => (
        <ul key={p.id}>
          <li>Name: {p.name}</li>
          <li>Price: {p.price}</li>
        </ul>
      ))}
    </main>
  );
};

export default ProductList;
