import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Shop from "./components/Shop";
import About from "./components/About";
import Home from "./components/Home";
import Product from "./components/productCard/Product";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route
          exact
          path="https://bgsnorbert.github.io/react-makeup-app/"
          component={Home}
        />
        <Route exact path="/react-makeup-app/shop" component={Shop} />
        <Route exact path="/react-makeup-app/about" component={About} />
        <Route path="/react-makeup-app/product/:id" component={Product} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
