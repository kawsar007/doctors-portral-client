import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
       <Switch>
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route> */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </Router>
    </div>
  );
}

export default App;
