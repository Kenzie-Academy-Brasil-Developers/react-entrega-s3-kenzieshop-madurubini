import { useDispatch } from "react-redux";
import {
  addToCartThunk,
  removeFromCartThunk,
} from "../../store/modules/cart/thunks";

import { IoRemoveCircleSharp } from "react-icons/io5";

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
          <button
            className="RemoveButton"
            onClick={() => dispatch(removeFromCartThunk(id))}
          >
            <IoRemoveCircleSharp />
          </button>
        ) : (
          <button
            className="BuyButton"
            onClick={() => dispatch(addToCartThunk(product))}
          >
            Comprar
          </button>
        )}
      </div>
    </li>
  );
};

export default Product;
