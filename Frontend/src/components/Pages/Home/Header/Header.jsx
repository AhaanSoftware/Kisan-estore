import React, { useState, useRef, useEffect } from "react";
import { Form, Button, Modal, Container, Row, Col } from "react-bootstrap";
import "./Header.css";
import Logo from "../../../Images/Logo.png";

const Header = () => {
  const [showPopup, setShowPopup] = useState(false);
  const searchRef = useRef(null);

  // Handle click outside to close popup
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
                <div className="search-container" ref={searchRef}>
                  <Form.Control
                    type="text"
                    className="search-bar"
                    placeholder="Search Product, Category, Brand..."
                    onFocus={() => setShowPopup(true)}
                  />
                  <Button className="search-btn">
                    <i className="bi bi-search"></i>
                  </Button>

                  {/* Search Popup */}
                  {showPopup && (
                    <div className={`search-popup ${showPopup ? "show" : ""}`}>
                      <Container>
                        <Row>
                          {/* Left Section: Recent Search */}
                          <Col md={4} className="recent-search">
                            <h5>📌 Recent Search</h5>
                            <ul className="list-unstyled">
                              <li>
                                <i className="bi bi-search"></i> Fertilizer
                              </li>
                              <li>
                                <i className="bi bi-search"></i> Bio Products
                              </li>
                              <li>
                                <i className="bi bi-search"></i> Farm Tools
                              </li>
                              <li>
                                <i className="bi bi-search"></i> Solar Products
                              </li>
                              <li>
                                <i className="bi bi-search"></i> Water Testing
                                Kits
                              </li>
                              <li>
                                <i className="bi bi-search"></i> Soil Testing
                                Kits
                              </li>
                              <li>
                                <i className="bi bi-search"></i> Fertilizer
                              </li>
                            </ul>
                          </Col>

                          {/* Right Section: Top Products */}
                          <Col md={8} className="top-products">
                            <h5>🏆 Top Products</h5>
                            <ul className="product-list">
                              <li className="product-item">
                                <img
                                  src="http://woocommerce.ahaanmedia.com/wp-content/uploads/2025/01/image-46.png"
                                  alt="Mushroom"
                                />
                                <span>Mushroom</span>
                              </li>
                              <li className="product-item">
                                <img
                                  src="http://woocommerce.ahaanmedia.com/wp-content/uploads/2025/01/image-45.png"
                                  alt="Spray Pumps"
                                />
                                <span>Spray Pumps</span>
                              </li>
                              <li className="product-item">
                                <img
                                  src="http://woocommerce.ahaanmedia.com/wp-content/uploads/2025/01/image-44.png"
                                  alt="Farm Machinery"
                                />
                                <span>Farm Machinery</span>
                              </li>
                              <li className="product-item">
                                <img
                                  src="http://woocommerce.ahaanmedia.com/wp-content/uploads/2025/01/image-43.png"
                                  alt="Mushroom"
                                />
                                <span>Mushroom</span>
                              </li>
                            </ul>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  )}
                </div>
              </div>

              <div className="col-md-4 my-2 my-md-0 d-flex justify-content-end gap-3">
                <Button variant="success">Bulk Inquiry</Button>
                <Button variant="outline-primary">Become a Seller</Button>
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
                Feedback
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
