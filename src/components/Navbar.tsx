import React from "react";

const Navbar = () => {
  return (
    <aside id="navbar">
      <div className="navbar-header">
        <div className="navbar-title">
          <span>TITLE</span>
        </div>
        <div className="navbar-icon">ICON</div>
      </div>
      <div className="navbar-content">
        <nav className="navbar-nav">
          <ul>
            <li>
              <a href="#">
                <span className="icon">ICON</span>
                <span className="label">Home</span>
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <h2>Profile</h2>
          <ul>
            <li>Profile</li>
            <li>Settings</li>
            <li>Logout</li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Navbar;
