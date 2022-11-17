import React from "react";
import Product from "./Product";
function Products({ products, setProducts }) {
  const deleteProduct = async (id) => {
    await fetch(`http://localhost:5050/products/${id}`, {
      method: "DELETE",
    });
    setProducts(products.filter((product) => product.id !== id));
  };
  const editProduct = async (id) => {};
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th> ID</th>
            <th>Title</th>
            <th>Name</th>
            <th> Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((element) => (
            <Product
              key={element.id}
              product={element}
              onEdit={editProduct}
              onDelete={deleteProduct}
            ></Product>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;
