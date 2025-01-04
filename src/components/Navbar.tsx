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

  const handleToggleNavbar = () => {
    const navbar = document.getElementById("navbar");
    navbar?.classList.toggle("active");
  }
  
  return (
    <aside id="navbar" className="">
      <div className="navbar-header">
        <div className="navbar-title">
          <span>TITLE</span>
        </div>
        <div className="navbar-icon" onClick={() => handleToggleNavbar()}>
          {customFa6Icons("FaAlignJustify")}
        </div>
      </div>
      <div className="navbar-content">
        <nav className="navbar-nav">
          <ul>
            {handleListPages()}
          </ul>
        </nav>

        <div className="navbar-footer">
          <ul>
            <li>
              <span className="icon">{customFa6Icons("FaCircleUser")}</span>
              <span className="label">Profile</span>
            </li>
            <li>
              <span className="icon">{customFa6Icons("FaGear")}</span>
              <span className="label">Paramètres</span>
            </li>
            <li>
              <span className="icon">{customFa6Icons("FaArrowRightFromBracket")}</span>
              <span className="label">Déconnexion</span>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Navbar;
