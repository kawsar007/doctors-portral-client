import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import AuthProvider from "./context/authProvider/authProvider";
import Appoinment from "./pages/Appoinment/Appoinment/Appoinment";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
       <Switch>
          <PrivateRoute path="/appoinment">
            <Appoinment />
          </PrivateRoute>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
