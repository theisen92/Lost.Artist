import { Switch, Route} from "react-router-dom";

import Navbar from "./components/Nav/Navbar";
import Home from "./pages/home/home";
import SignInRegister from "./pages/sign-in-or-register/sign-in-register";
import CreatorsHome from "./pages/creators/creators-home-page-"

import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/user/login-register" component={SignInRegister} />
        <Route path="/creator/:id" component={CreatorsHome} />
      </Switch>
    </div>
  );
}

export default App;
