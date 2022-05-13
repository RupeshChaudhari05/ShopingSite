import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import { Home } from "./pages/home/Home";
import Login from "./pages/Login/Login";
import ProductDetail from "./pages/ProductDetail/ProductDetail";



function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} index />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Login />} />
        <Route path="/category/:id" element={<CategoryPage />} ></Route>
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<div>404</div>} />
        <Route path="/detail/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
