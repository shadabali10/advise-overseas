import { React, useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/NavBar/Navbar";
import Footer from "./Components/Footer/Footer";
import UnderGrad from "./Components/UnderGrad/UnderGrad";
import Masters from "./Components/Masters/Masters";
import Phd from "./Components/Phd/Phd";
import Articles from "./Components/Articles/Articles";
import Blog from "./Components/Blog/Blog";
import StudentGuide from "./Components/StudentGuide/StudentGuide";
import Scholarship from "./Components/Scholarship/Scholarship";
import Scholars from "./Components/Scholars/Scholars";

function App() {
  const [isOpen, setisOpen] = useState(false);

  const toggle = () => {
    setisOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setisOpen(false);
      }
    };
    window.addEventListener("resize", hideMenu);
    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });
  return (
    <div>
      <BrowserRouter>
        <Navbar toggle={toggle} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/undergrad" component={UnderGrad} />
          <Route exact path="/masters" component={Masters} />
          <Route exact path="/phd" component={Phd} />
          <Route exact path="/articles" component={Articles} />
          <Route exact path="/blogs" component={Blog} />
          <Route exact path="/student-guide" component={StudentGuide} />
          <Route exact path="/scholarship" component={Scholarship} />
          <Route exact path="/scholar" component={Scholars} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
