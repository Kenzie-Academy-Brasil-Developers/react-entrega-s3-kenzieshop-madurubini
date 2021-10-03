import { useDispatch } from "react-redux";
import {
  addToCartThunk,
  removeFromCartThunk,
} from "../../store/modules/cart/thunks";

const Product = ({ product, isRemovable = false }) => {
  const dispatch = useDispatch();

  const { id, name, price, image } = product;

  return (
    <div>
      <h3>{name}</h3>
      <h3>{price}</h3>

      <img src={image} alt={name}></img>
      {isRemovable ? (
        <button onClick={() => dispatch(removeFromCartThunk(id))}>
          Remover
        </button>
      ) : (
        <button onClick={() => dispatch(addToCartThunk(product))}>
          Adicionar
        </button>
      )}
    </div>
  );
};

export default Product;
