import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { AuthContext } from './context/auth';

import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Navbar from './Components/Navbar';
import Order from './Components/Order/Order';

function App() {
  const existingTokens = JSON.parse(localStorage.getItem('tokens'));
  const [authTokens, setAuthTokens] = useState(existingTokens);
  const setTokens = (data) => {
    localStorage.setItem('tokens', JSON.stringify(data));
    setAuthTokens(data);
  };

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={<Home />} />
          <Route exact path="/member/login" component={<Login referrer="/" />} />
          <Route exact path="/member/register" component={<Register referrer="/" />} />
          <Route exact path="/order" component={<Order />} />
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
