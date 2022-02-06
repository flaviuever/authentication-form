import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <ul className="nav navbar-nav">
                      <li>
                        <a className="nav-item nav-link" to="/register">SignUp</a>
                      </li>
                      <li>
                        <a className="nav-item nav-link" to="/login">Login</a>
                      </li>
                      <li>
                        <a className="nav-item nav-link" to="/logout">Log OUT</a>
                      </li>
                      <li>
                        <a className="nav-item nav-link" to="/dashboard">Dashboard</a>
                      </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div>
            <div className="alert alert-primary" role="alert">
                <h5>Dashboard</h5>
            </div>
        </div>

        <div className="container mt-5 w-25">
            <div>
              <h1 className="h1">Log In</h1>
              <div className="form-group">
                  <label>Email address</label>
                  <input type="email" className="form-control"
                         placeholder="Enter email"/>
              </div>
              <div className="form-group">
                  <label>Password</label>
                  <input type="password"
                         className="form-control"
                         placeholder="Password"/>
              </div>
              <button className="btn btn-primary">Submit</button>
            </div>
        </div>

        <div>
            <div className="container mt-5 w-25">
                <h1 className="h1">Register</h1>
                <div>
                  <div className="form-group">
                      <label>Email address</label>
                      <input type="email" className="form-control"
                             placeholder="Enter email"/>
                  </div>
                  <div className="form-group">
                      <label>Password</label>
                      <input type="password"
                             className="form-control"
                             placeholder="Password"/>
                  </div>
                  <button disabled={true} className="btn btn-primary">Register</button>
                </div>
            </div>
        </div>

        <div className="alert alert-danger" role="alert">
            You have been logged out
        </div>
    </div>
  );
}

export default App;
