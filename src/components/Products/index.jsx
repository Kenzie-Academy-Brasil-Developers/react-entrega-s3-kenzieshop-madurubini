import { useSelector } from "react-redux";
import Product from "../Product";

const Products = () => {
  const products = useSelector((store) => store.products);

  return (
    <ul>
      {products.map((product) => (
        <Product key={product.id} product={product}></Product>
      ))}
    </ul>
  );
};

export default Products;
