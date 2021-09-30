import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import Homepage from "./pages/homepage/Homepage";
import Magicpage from "./pages/magicpage/Magicpage";
import Logo from "./components/logo/Logo";
import RippleAnimation from "./components/rippleanimation/RippleAnimation"


function App() {
  return (
    <div>
    <BrowserRouter>
      <Logo />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/magic" component={Magicpage} />
      </Switch>
    </BrowserRouter>
    <RippleAnimation />
    </div>
  );
}

export default App;
