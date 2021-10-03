import { Route, Switch } from "react-router";
import CartPage from "../pages/CartPage";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/cart">
        <CartPage />
      </Route>
    </Switch>
  );
};

export default Routes;
