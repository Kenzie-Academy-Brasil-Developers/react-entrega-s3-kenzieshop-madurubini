import { useHistory } from "react-router";
import Cart from "../../components/Cart";
import { AiFillHome } from "react-icons/ai";

const CartPage = () => {
  const history = useHistory();

  const goToHome = () => {
    history.push("/");
  };
  return (
    <div>
      <button onClick={goToHome}>
        <AiFillHome />
      </button>
      <div>
        <Cart />
      </div>
    </div>
  );
};

export default CartPage;
