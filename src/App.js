import "./App.css";
import React, { useEffect } from "react";
import Button from "./Components/Button";
import Products from "./Components/Products";
function App() {
  const [products, setProducts] = React.useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    getProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await fetch("http://localhost:5050/products");
    const data = await res.json();
    return data;
  };

  return (
    <div className="App">
      {/* <Button onClick={alertName} icon="delete" text="Say name"></Button>
      <Button
        onClick={alertAge}
        icon="edit"
        text="Say Age"
        color="red"
      ></Button> */}

      <Products products={products} setProducts={setProducts}></Products>
    </div>
  );
}

export default App;
