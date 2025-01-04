import React, { useEffect } from "react";
import pages from "@/config/pages.json";
import { customFa6Icons } from '@/utils/Icons'; // Import customFa6Icons from Icons.tsx

const Navbar = () => {

  const handleListPages = () => {
    return pages.map((page) => {
      return (
        <li key={page.label}>
          <a href={page.url}>
            <span className="icon">{customFa6Icons(page.icon)}</span>
            <span className="label">{page.label}</span>
          </a>
        </li>
      )
    })
  }

  useEffect(() => {
    console.log(pages);
  }, [pages]);
  
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
            {/* <li>
              <a href="#">
                <span className="icon">ICON</span>
                <span className="label">Home</span>
              </a>
            </li> */}

            {handleListPages()}
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
