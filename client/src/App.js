import Template from './template/Template';
import Dashboard from './component/Dashboard';
import Login from './component/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {

  const token = localStorage.getItem("accessToken");

  if(!token){
    return <Login />
  }
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
              <Home />
            </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          {/* Login */}
          <Template>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Template>
        </Switch>
      </Router>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
