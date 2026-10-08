import React from "react";
import data from "../../data/cv.json";
import Workbar from "./workbar";

function navbar() {
  return (
    <header>
      <nav className="flex items-center p-6 justify-between">
        <div className="logo text-[14px] md:text-[16px]">
          {data.meta.logo.name}
          <span className="accent-color">{data.meta.logo.suffix}</span>
        </div>

        <div className="nav-items">
          <ul className="flex items-center gap-8 text-[14px]">
            {data.nav.map((navItems) => (
              <li key={navItems.id}>{navItems.label}</li>
            ))}
            <Workbar />
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default navbar;
