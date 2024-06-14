import { Route, Switch, NavLink } from "react-router-dom";
import './App.css';
import { Login } from "./components/Login";
import { Friends } from "./components/Frienfs";
import { AddFriend } from "./components/AddFriend";
import axios from "axios";
import { useState } from "react";
  
function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const logout = () => {
    localStorage.removeItem("token");
    axios.post("http://localhost:9000 /api/logout", null, {
headers:{
  Authorization: token,
}, 
    });
  };
  return (
    <div className="App">
      <h1>Client Auth Projesi: Friends</h1>
      <NavLink to="/friends/add">+Add Friend </NavLink>
      {token && <button onClick={logout}>Logout</button>}
      <Switch>
        <Route path="/" exact>
        <Login token={token} setToken={setToken} />
        </Route>
        <Route path="/login" exact>
        <Login token={token} setToken={setToken} />
        </Route>  
        <Route path="/friends" exact>
        <Friends />
        </Route>
        <Route path="/friends/add" exact>
        <AddFriend />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
