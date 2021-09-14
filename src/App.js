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
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/about" component={About} />
        <Route path="/product/:id" component={Product} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
