import { useDispatch } from "react-redux";
import {
  addToCartThunk,
  removeFromCartThunk,
} from "../../store/modules/cart/thunks";

import "./style.css";

const Product = ({ product, isRemovable = false }) => {
  const dispatch = useDispatch();

  const { id, name, price, image } = product;

  return (
    <li className="Card">
      <img src={image} alt={name}></img>
      <div className="Info">
        <h3>{name}</h3>
        <h3>R$ {price.toFixed(2)}</h3>
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
    </li>
  );
};

export default Product;
