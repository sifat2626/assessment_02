import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/user/Home'
import Menu from "./nav/Menu";
import './bootstrap.min.css'
import Login from "./pages/user/Login";
import Register from "./pages/user/Register";
import {Toaster} from "react-hot-toast";
import PrivateRoute from "./routes/PrivateRoute";
import AdminRoute from "./routes/AdminRoute";
import Dashboard from "./pages/user/Dashboard";
import AdminDashboard from "./admin/AdminDashboard";



function App() {
  return (
      <BrowserRouter>
          <Menu/>
          <Toaster/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<PrivateRoute />}>
                <Route path="user" element={<Dashboard />} />
            </Route>

            <Route path="/dashboard" element={<AdminRoute />}>
                <Route path="admin" element={<AdminDashboard />} />
            </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
