import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import Homepage from "./pages/homepage/Homepage";
import Superpage from "./pages/scopepage/Superpage";
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
        <Route path="/super" component={Superpage} />
      </Switch>
    </BrowserRouter>
    <RippleAnimation />
    </div>
  );
}

export default App;
