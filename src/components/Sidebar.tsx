import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const contactIsActive = location.pathname === "/";
  const chartsIsActive = location.pathname === "/visuals";
  return (
    <div className="bg-sky-700 border-r border-black">
      <Link
        to={"/"}
        className={`block py-6 px-4 font-semibold hover:bg-white border-b border-black ${
          contactIsActive
            ? "bg-white text-black"
            : "text-white hover:text-black"
        }`}
      >
        Contact
      </Link>
      <Link
        to={"/visuals"}
        className={`block py-6 px-4 font-semibold hover:bg-white border-b border-black ${
          chartsIsActive ? "bg-white text-black" : "text-white hover:text-black"
        }`}
      >
        Charts and Maps
      </Link>
    </div>
  );
};

export default Sidebar;
