import { useDispatch } from "react-redux";
import { removeFromCart, addToCart } from "../../store/modules/cart/actions";

const Product = ({ product, isRemovable = false }) => {
  const dispatch = useDispatch();

  const { id, name, price, image } = product;

  return (
    <div>
      <h3>{name}</h3>
      <h3>{price}</h3>

      <img src={image} alt={name}></img>
      {isRemovable ? (
        <button onClick={() => dispatch(removeFromCart(id))}>Remover</button>
      ) : (
        <button onClick={() => dispatch(addToCart(product))}>Adicionar</button>
      )}
    </div>
  );
};

export default Product;
