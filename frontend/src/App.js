import React, { useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from './components/Nav';
import Login from './components/Login';
import Logout from './components/Logout';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div>
      <HashRouter>
        <Nav />
        <Switch>
          <Route path="/Register" component={Register} />
          <Route path="/Login">
            <Login
              setIsAuth={setIsAuth}
            />
          </Route>
          <Route path="/Logout">
            <Logout
              setIsAuth={setIsAuth}
            />
          </Route>
          <ProtectedRoute path="/Dashboard" component={Dashboard} isAuth={isAuth} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
