import Adminpage from "./components/Adminpage";
import Home from "./components/Home";
import Login from "./components/Login.js";
import Myorders from "./components/Myorders";
import Orders from "./components/Orders";
import Product from "./components/Product";
import Products from "./components/Products";
import Signup from "./components/Signup";

function App() {
  return (
    <div>
      <Home />
      <Login />
      <Signup />
      <Products />
      <Product />
      <Orders />
      <Myorders />
      <Adminpage />
    </div>
  );
}

export default App;