import React from "react";

const Header = ({ inpLogo, listItem }) => {
  return (
    <header className="app-header">
      <h1> {inpLogo}</h1>

      <nav>
        <ul>
          {listItem.map((item, index) => (
            <li key={index}>
              <a href="">{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
