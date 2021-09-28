import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import Homepage from "./pages/homepage/Homepage";
import Scopepage from "./pages/scopepage/Scopepage";
import Logo from "./components/logo/Logo";
// import signData from "./data/signs.json"
import RippleAnimation from "./components/rippleanimation/RippleAnimation"


function App() {
  return (
    <div>
    <BrowserRouter>
      <Logo />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/dailyscope" component={Scopepage} />
      </Switch>
    </BrowserRouter>
    <RippleAnimation />
    </div>
  );
}

export default App;
