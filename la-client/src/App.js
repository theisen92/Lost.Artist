import { Switch, Route} from "react-router-dom";

import Navbar from "./components/Nav/Navbar";
import Home from "./pages/home/home";

import './App.css';

function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact to="/" component={Home} />
    </Switch>
    </>
  );
}

export default App;
