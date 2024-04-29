import React, { useState } from 'react';
import './NavigationBar.css'; 
import { useNavigate, useLocation } from "react-router-dom";


function NavigationBar() {
  const location = useLocation()
  const initialActiveSection = location.pathname === "/" ? "Home" : "History";
  const [activeSection, setActiveSection] = useState(initialActiveSection);
  const navigate = useNavigate();

  const handleSectionClick = (section) => {
    setActiveSection(section);
    if(section === 'Home'){
        navigate("/");
    }
    else{
        navigate("/History");
    }
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        {/* Add your logo or other items for the left side */}
      </div>
      <div className="navbar-right">
        <div
          className={activeSection === 'Home' ? 'nav-item active' : 'nav-item'}
          onClick={() => handleSectionClick('Home')}
        >
          Home
        </div>
        <div
          className={activeSection === 'History' ? 'nav-item active' : 'nav-item'}
          onClick={() => handleSectionClick('History')}
        >
          History
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
