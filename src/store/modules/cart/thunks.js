import { addToCart, removeFromCart } from "./actions";
import { toast } from "react-toastify";

export const addToCartThunk = (product) => {
  return (dispatch) => {
    const list = JSON.parse(localStorage.getItem("cart")) || [];
    list.push(product);
    localStorage.setItem("cart", JSON.stringify(list));
    toast.success("Produto adicionado ao carrinho");
    dispatch(addToCart(product));
  };
};

export const removeFromCartThunk = (id) => (dispatch, getStore) => {
  const { cart } = getStore();
  const list = cart.filter((product) => product.id !== id);
  localStorage.setItem("cart", JSON.stringify(list));
  toast.warning("Produto removido do carrinho");

  dispatch(removeFromCart(list));
};
