import React, {useState} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Users from './components/Users';
import PrivateRoute from './components/PrivateRoute'

function App() {
  const [userlist, setUserList] = useState([])
  const [user, setUser] = useState({
    username: "",
    password: "",
    department: ""
  })

  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={Signup}/>
        <Route path='/login' component={Login}/>
        <PrivateRoute path='/users' component={Users}/>
      </div>
    </Router>
  );
}

export default App;
