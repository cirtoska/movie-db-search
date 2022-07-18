import React from "react";
import logo from "../img/logo.jpg";
import Form from "./SearchForm";

const NavBar = () => {
  return (
    <header>
      <img src={logo} alt="logo" />
      <Form />
    </header>
  );
};

export default NavBar;
