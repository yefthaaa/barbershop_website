import "./App.css";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar_notLogin";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BestCutting from "./pages/BestCutting";
import DescRambut from "./pages/DescRambut";
import FaceShape from "./pages/FaceShape";
import BestBarber from "./pages/BestBarber";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {

  const token = sessionStorage.getItem('token');
  console.log(token);

  if (!token) {
    return (
      <div className="App">
        <Router>
          <Navbar2 />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
          </Switch>
          <Footer />
        </Router>
      </div>
    )
  }

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/bestcutting" exact component={BestCutting} />
          <Route path="/descrambut/:pid" component={DescRambut} />
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
