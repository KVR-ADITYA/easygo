import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./pages/Home_page/home_main.jsx";
import "./pages/Login_page/LoginPage";
import "./pages/Login_page/SignUpPage";
import HomePage from "./pages/Home_page/home_main.jsx";
import LoginPage from "./pages/Login_page/LoginPage";
import SignUp from "./pages/Login_page/SignUpPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage />
      </div>
    );
  }
}

export default App;
