import { Switch, Route} from "react-router-dom";

import Navbar from "./components/Nav/Navbar";
import Home from "./pages/home/home";
import SignInRegister from "./pages/sign-in-or-register/sign-in-register";

import './App.css';

function App() {
  return (
    <>
    <Navbar />
      <Switch>
        <Route to="/user/login-register" component={SignInRegister} />
        <Route exact={true} to="/" component={Home} />
        
      </Switch>
    </>
  );
}

export default App;
