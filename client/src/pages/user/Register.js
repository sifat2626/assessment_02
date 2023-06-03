import React, {useState} from 'react';
import Jumbotron from "../../components/Jumbotron";
import axios from "axios";
import toast from "react-hot-toast";
import {useAuth} from "../../context/auth";
import {useNavigate} from "react-router-dom";

const Register = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    // const [auth,setAuth] = useAuth();
    const navigate = useNavigate();
    const url = `http://localhost:8000/api/v1/register`

    const handleSubmit = async (e)=> {

        e.preventDefault();
        try{
            const {data} = await axios.post(
                `${url}`,{
                    name,
                    email,
                    password
                }
            )
            console.log(data)
            if (data?.error) {
                toast.error(data.error);
            } else {
                // localStorage.setItem("auth", JSON.stringify(data));
                // setAuth({ ...auth, token: data.token, user: data.user });
                toast.success("Registration successful");
                navigate("/dashboard/user");
            }
        }catch (error){
            toast.error(`Registration unsuccessful`)
        }
    }
    return (
        <>
            <Jumbotron title="Hello" subTitle="Register" />
            <form className="container p-5 form-control mt-5" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text"
                           className="form-control"
                           placeholder="Enter name"
                           value={name}
                           onChange={(e)=>{setName(e.target.value)}}
                           autofocus
                    />
                </div>
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

export default Register;