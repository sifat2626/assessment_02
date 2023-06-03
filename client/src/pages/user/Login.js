import React, {useState} from 'react';
import Jumbotron from "../../components/Jumbotron";
import axios from "axios";
import toast from "react-hot-toast";
import {useAuth} from "../../context/auth";
import {useLocation, useNavigate} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('ashrafulsifat26@gmail.com');
    const [password, setPassword] = useState('123456');
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const url = `http://localhost:8000/api/v1/login`

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const {data} = await axios.post(
                `${url}`, {
                    email,
                    password
                }
            )
            console.log(data);
            if (data?.error) {
                toast.error(data.error);
            } else {
                localStorage.setItem("auth", JSON.stringify(data));
                setAuth({ ...auth, token: data.token, user: data.user });
                toast.success("Login successful");
                navigate(
                    location.state ||
                    `/dashboard/${data?.user?.role === 1 ? "admin" : "user"}`
                );
            }
        } catch (error) {
            toast.error(`Login unsuccessful`)
        }
    }
    return (
        <>
            <Jumbotron title={`Hello`} subTitle="Login"/>
            <form className="container p-5 form-control mt-5" onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="text"
                           className="form-control"
                           placeholder="Enter Email"
                           value={email}
                           onChange={(e) => {
                               setEmail(e.target.value)
                           }}
                           autoFocus
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="text"
                           className="form-control"
                           placeholder="Enter Password"
                           value={password}
                           onChange={(e) => {
                               setPassword(e.target.value)
                           }}
                           autoFocus
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    );
};

export default Login;