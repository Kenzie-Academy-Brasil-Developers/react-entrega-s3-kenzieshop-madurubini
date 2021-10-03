import { useSelector } from "react-redux";
import Product from "../Product";

const Cart = () => {
  const cart = useSelector((store) => store.cart);

  return (
    <ul>
      <h2>Carrinho</h2>
      {cart.map((product) => (
        <Product key={product.id} product={product} isRemovable></Product>
      ))}
    </ul>
  );
};

export default Cart;
