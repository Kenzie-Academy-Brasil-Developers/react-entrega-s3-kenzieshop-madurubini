import { useSelector } from "react-redux";
import Product from "../Product";
import "./style.css";

const Products = () => {
  const products = useSelector((store) => store.products);

  return (
    <ul className="ProductList">
      {products.map((product) => (
        <Product key={product.id} product={product}></Product>
      ))}
    </ul>
  );
};

export default Products;
