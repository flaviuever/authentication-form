import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const url = `http://localhost:6789/register`;
const Register = () => {

    const router = useHistory();
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const register = async () => {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({mail, password})
        });

        if(response.status !== 200) {
            setError('User already registered');
            setTimeout(()=> {
                setError('');
            }, 2000);
            return
        }

        router.push('/login');
    }

    return (
        <div>
            <div className="container mt-5 w-25">
                <h1 className="h1">Register</h1>
                <div>
                    <div className="form-group">
                        <label>Email address</label>
                        <input 
                        value={mail}
                        type="email" 
                        className="form-control"
                        placeholder="Enter email"
                        onChange={(e) => {setMail(e.target.value)}}/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input  value={password}
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                onChange={(e) => {setPassword(e.target.value)}}/>
                    </div>
                    <button onClick={register} disabled={ password.length < 6 || mail === "" ? true : false} className="btn btn-primary">Register</button>
                    </div>
                        {error && (
                            <div className="alert alert-danger" role="alert">
                                {error}
                            </div>
                        )}
            </div>
        </div>
    )
}

export default Register;