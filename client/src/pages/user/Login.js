import React, {useState} from 'react';
import Jumbotron from "../../components/Jumbotron";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const url = `http://localhost:8000/api/v1/login`

    const handleSubmit = async (e)=> {
        e.preventDefault();
        try{
            const {data} = await axios.post(
                `${url}`,{
                    email,
                    password
                }
            )
            console.log(data)
            toast.success('login successful')
        }catch (error){
            console.log(error)
        }
    }
    return (
        <>
            <Jumbotron title={`Hello`} subTitle="Login" />
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