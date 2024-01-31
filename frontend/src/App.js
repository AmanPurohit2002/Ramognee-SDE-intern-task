import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Auth from "./page/Auth";
import Product from "./page/Product";
import ForgotPassword from "./component/ForgotPassword";

function App() {
  return (
    <div className="my-2 mx-2">
    <Router>
      <Routes>
        <Route path="/" element={<Auth/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/product" element={<Product/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;