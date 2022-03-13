import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
const url = `http://localhost:6789/login`;

const Login = ({setIsAuth}) => {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useHistory();
    const login = async () => {
        const response = await fetch(url, {
            method: "POST",
            credentials: "include",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({mail, password})
        })

        if(response.status !== 200) {
            setError("Wrong credentials");
            setTimeout(()=>{
                setError('')
            },2000);
            return
        }
        setIsAuth(true);
        router.push('./dashboard')
    }
    
    return (
        <div className="container mt-5 w-25">
            <div>
                <h1 className="h1">Log In</h1>
                <div className="form-group">
                    <label>Email address</label>
                    <input  value={mail}
                            onChange={(e) => {setMail(e.target.value)}}
                            type="email" className="form-control"
                            placeholder="Enter email"/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input  value={password}
                            onChange={(e) => {setPassword(e.target.value)}}
                            type="password"
                            className="form-control"
                            placeholder="Password"/>
                </div>
                <button onClick={login} className="btn btn-primary">Submit</button>
            </div>
        </div>
    )
}

export default Login;