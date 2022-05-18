import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtechNavigation from "./component/ProtechNavigation";
import Cart from "./pages/Cart/Cart";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import ChekoutPage from "./pages/ChekoutPage/ChekoutPage";
import ContactPage from "./pages/Contact/ContactPage";
import { Home } from "./pages/home/Home";
import Login from "./pages/Login/Login";
import ProductDetail from "./pages/ProductDetail/ProductDetail";


function App() {
  const token = useSelector(state => state.LoginData.loginToken);
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} index />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Login />} />
        <Route path="/category/:id" element={<CategoryPage />} ></Route>
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="*" element={<div>404</div>} />
        <Route path="/detail/:id" element={<ProductDetail />} />

        <Route path="/cart" element={<ProtechNavigation token={token}><Cart /></ProtechNavigation>} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/checkout" element={<ProtechNavigation token={token}><ChekoutPage /></ProtechNavigation>} />

      </Routes>
    </BrowserRouter>
  </>
}

export default App;
