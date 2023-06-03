import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/user/Home'
import Menu from "./nav/Menu";
import './bootstrap.min.css'
import Login from "./pages/user/Login";
import Register from "./pages/user/Register";
import {Toaster} from "react-hot-toast";



function App() {
  return (
      <BrowserRouter>
          <Menu/>
          <Toaster/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
