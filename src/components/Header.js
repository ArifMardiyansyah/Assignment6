import React from "react";
import Search from "./Search";

const Header = ({ title, onSearch }) => {
  return (
    <header className="header">
      <div className="container">
        <h1>{title}</h1>
        <Search onSearch={onSearch} />
      </div>
    </header>
  );
};

export default Header;