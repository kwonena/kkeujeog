import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src="/images/logo.png" alt="logo" />
      <h1 className="title">끄적끄적</h1>
    </header>
  );
};

export default Header;
