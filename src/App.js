import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Landing from "./components/Landing/Landing";
import Nosotros from "./components/Nosotros/Nosotros"
import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Nosotros" component={Nosotros} />
      </Switch>
    </div>
  );
}

export default App;
