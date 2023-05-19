import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BestCutting from "./pages/BestCutting";
import FaceShape from "./pages/FaceShape";
import BestBarber from "./pages/BestBarber";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const token = localStorage.getItem('token');

  if(!token) {
    return <Login />
  }

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/bestcutting" exact component={BestCutting} />
          <Route path="/faceshape" exact component={FaceShape} />
          <Route path="/bestbarber" exact component={BestBarber} />
          <Route path="/login" exact component={Login} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
