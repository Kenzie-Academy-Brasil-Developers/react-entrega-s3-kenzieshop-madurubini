import { useHistory } from "react-router";
import Products from "../../components/Products";
import { BiDrink } from "react-icons/bi";
import { MdShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";

const Home = () => {
  const history = useHistory();
  const cart = useSelector((store) => store.cart);

  const goToCart = () => {
    history.push("/cart");
  };

  return (
    <div>
      <h1>
        Drink'$hop
        <BiDrink />
      </h1>
      <p>Make your day better</p>
      <Products />

      <button onClick={goToCart}>
        <MdShoppingCart />
      </button>
      <span>{cart.length}</span>
    </div>
  );
};
export default Home;
