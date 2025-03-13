import React, { useState, useEffect } from "react";
import { Navbar, Container, Button, Nav, Badge } from "react-bootstrap";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import GoogleLogo from "../Images/language.png";
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook
import './TopHeader.css';

const TopHeader = () => {
  const [cartCount, setCartCount] = useState(0);  // Cart state
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // User logged-in state
  const navigate = useNavigate();  // Initialize useNavigate hook

  useEffect(() => {
    // Check if the user is logged in (authToken exists)
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }

    // Get cart count from localStorage
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartCount(storedCart.length);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('cart');
    setIsLoggedIn(false);
    navigate('/login');  // Navigate to the login page
  };

  const handleLogin = () => {
    navigate('/login');  // Navigate to the login page
  };

  return (
    <Navbar variant="dark" className="top-header">
      <Container className="d-flex justify-content-between">
        <Button variant="outline-light" className="language-button">
          <img src={GoogleLogo} alt="Google Logo" className="google-icon" />
          Select Language
        </Button>

        {/* Right: My Account and Cart */}
        <Nav className="d-flex align-items-center gap-1">
          <Nav.Link href="#" className="d-flex align-items-center">
            <FaUserCircle className="nav-icon" />
            {isLoggedIn ? 'My Account' : 'Login'}
          </Nav.Link>
          <Nav.Link
            href="#"
            className="d-flex align-items-center position-relative"
            onClick={() => navigate('/cart')}  // Navigate to cart page
          >
            <FaShoppingCart className="nav-icon" />
            <Badge bg="danger" pill className="cart-badge">
              {cartCount} {/* Display cart count */}
            </Badge>
          </Nav.Link>
          {isLoggedIn && (
            <Nav.Link href="#" onClick={handleLogout}>
              Logout
            </Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default TopHeader;
