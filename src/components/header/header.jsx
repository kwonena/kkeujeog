import React from "react";
import "./header.scss";

const Header = ({ onLogout }) => {
  return (
    <header className="header">
      <img className="logo" src="/images/logo.png" alt="logo" />
      <h1 className="title">끄적끄적</h1>
      {onLogout && <span className="comment">나만의 기록 사이트</span>}
      {onLogout && (
        <button className="logout" onClick={onLogout}>
          Logout
        </button>
      )}
    </header>
  );
};

export default Header;
