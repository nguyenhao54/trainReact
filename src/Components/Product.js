import React from "react";
import Button from "./Button";

function Product({ product, onEdit, onDelete }) {
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.title}</td>
      <td>
        <Button color="blue" text="edit" onClick={onEdit(product.id)}></Button>
        <Button
          color="red"
          text="delete"
          onClick={() => {
            alert("delete");
            onDelete(product.id);
          }}
        ></Button>
      </td>
    </tr>
  );
}

export default Product;
