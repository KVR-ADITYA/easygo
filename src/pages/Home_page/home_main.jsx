import React, { Component } from "react";
import NavigationBar from "./N-bar";
import Comp1 from "./Comp1";
import "./home.css";
import "bootstrap/dist/css/bootstrap.css";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavigationBar />
        <Comp1 />
      </div>
    );
  }
}

export default HomePage;
