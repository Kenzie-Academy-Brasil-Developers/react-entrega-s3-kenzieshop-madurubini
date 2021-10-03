import { useSelector } from "react-redux";
import Product from "../Product";
import "./style.css";

const Cart = () => {
  const cart = useSelector((store) => store.cart);

  const calcPrice = cart.reduce((acc, product) => {
    return acc + product.price;
  }, 0);

  return (
    <div className="Cart">
      <ul className="List">
        {cart.map((product) => (
          <Product key={product.id} product={product} isRemovable></Product>
        ))}
      </ul>
      <div className="TotalCart">
        <h3>Resumo da Compra</h3>
        <p>Total de produtos: {cart.length}</p>
        <p>Valor total: R$ {calcPrice.toFixed(2)} </p>
      </div>
    </div>
  );
};

export default Cart;
