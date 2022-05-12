import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import { Home } from "./pages/home/Home";
import Login from "./pages/Login/Login";



function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} index />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
