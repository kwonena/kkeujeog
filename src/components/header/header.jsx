import React from "react";
import { useNavigate } from "react-router-dom";
import "./header.scss";

const Header = ({ onLogout }) => {
  const navigate = useNavigate();

  return (
    <header className="header">
      {!onLogout && (
        <img
          className="logo"
          src="/images/logo.png"
          alt="logo"
          onClick={() => navigate("/main")}
        />
      )}
      <h1 className="title" onClick={() => navigate("/main")}>
        끄적끄적
      </h1>
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
