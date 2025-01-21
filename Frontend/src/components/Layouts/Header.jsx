import React from "react";
import "./Header.css";
import Logo from "../Images/Logo.png";

const Header = () => {
  return (
    <header className="header d-flex justify-content-between align-items-center px-3">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Section: Logo */}
          <div className="col-lg-3 col-md-4 col-12 d-flex align-items-center">
            <img src={Logo} alt="Kisan e-Store" className="header-logo" />
          </div>

          {/* Right Section */}
          <div className="col-lg-9 col-md-8 col-12">
            {/* Search Bar and Buttons */}
            <div className="row align-items-center">
              <div className="col-md-8 my-2 my-md-0">
                <div className="input-group search-bar">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search products by name, brand, crop..."
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-secondary" type="button">
                    <i className="bi bi-search"></i>
                  </button>
                </div>
              </div>
              <div className="col-md-4 my-2 my-md-0 d-flex justify-content-end gap-3">
                <button className="btn btn-success">Bulk Inquiry</button>
                <button className="btn btn-outline-primary">Become a Seller</button>
              </div>
            </div>

            {/* Divider */}
            <hr className="my-3" />

            {/* Navigation Menu */}
            <nav className="nav justify-content-center">
              <a className="nav-link" href="#">
                Home
              </a>
              <a className="nav-link" href="#">
                Categories
              </a>
              <a className="nav-link" href="#">
                Brands
              </a>
              <a className="nav-link" href="#">
                Contact Us
              </a>
              <a className="nav-link" href="#">
                Feedback Form
              </a>
              <a className="nav-link" href="#">
                Inquiry
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
