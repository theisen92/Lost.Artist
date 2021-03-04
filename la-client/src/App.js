import { Switch, Route} from "react-router-dom";

import Home from "./pages/home/home";

import './App.css';

function App() {
  return (
    <>
    {/* navbar */}
    <Switch>
      <Route exact to="/" component={Home} />
    </Switch>
    </>
  );
}

export default App;
