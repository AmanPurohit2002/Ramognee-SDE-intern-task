import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Auth from "./page/Auth";
import Product from "./page/Product";
import ForgotPassword from "./component/ForgotPassword";
import Cart from "./page/Cart";
import ClothingPage from "./page/Clothing";
import AccessoriesPage from "./page/Accessories";

function App() {
  return (
    <div className="my-2 mx-2">
    <Router>
      <Routes>
        <Route path="/" element={<Auth/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/clothing" element={<ClothingPage/>}/>
        <Route path="/accessories" element={<AccessoriesPage/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
