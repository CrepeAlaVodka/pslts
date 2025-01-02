import React from 'react';

const Navbar = () => {
  return (
    <aside className="navbar">
      <div>
        <h1>Navbar</h1>
        Icon "burger"
      </div>
      <div>
        <nav>
          <ul>
            <li>Accueil</li>
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