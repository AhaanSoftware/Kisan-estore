import React from 'react';
import "./TopHeader.css";
import logo from '../../../Images/language.png';
import { PiHandbagBold } from "react-icons/pi";

const TopHeader = () => {
  return (
    <div className="header-section d-flex justify-content-between align-items-center px-3 py-2">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          {/* Google Translate Dropdown */}
          <div className="google-translate d-flex align-items-center col-auto">
            <img
              src={logo}
              alt="Google"
              className="google-logo"
            />
            <select className="form-select translate-dropdown">
              <option value="">Select Language</option>
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
          </div>

          {/* My Account and Shopping Cart */}
          <div className="d-flex align-items-center gap-4 col-auto">
            <div className="icon-group d-flex align-items-center">
              <span className="ms-2">My Account</span>
            </div>
            <div className="icon-group d-flex align-items-center position-relative">
              <PiHandbagBold />
              {/* Notification Badge */}
              <span className="notification-badge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                3
                <span className="visually-hidden">3 items in cart</span>
              </span>
              <span className="ms-2"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
