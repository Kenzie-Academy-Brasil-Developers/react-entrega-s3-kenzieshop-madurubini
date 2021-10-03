import { useSelector } from "react-redux";
import Product from "../Product";

const Cart = () => {
  const cart = useSelector((store) => store.cart);

  const calcPrice = cart.reduce((acc, product) => {
    return acc + product.price;
  }, 0);

  return (
    <div>
      <ul>
        {cart.map((product) => (
          <Product key={product.id} product={product} isRemovable></Product>
        ))}
      </ul>
      <p>Valor total: {calcPrice} </p>
      <p>Total de produtos {cart.length}</p>
    </div>
  );
};

export default Cart;
