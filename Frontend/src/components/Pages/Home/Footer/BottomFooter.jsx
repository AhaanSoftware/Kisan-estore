import React from 'react'
import "./BottomFooter.css"; 
const BottomFooter = () => {
  return (
    <div className="footer-bottom">
  <div className="container">
    <div className="row">
      {/* Social Icons Section */}
      <div className="col-md-9 text-center text-md-start">
      <p className="copyright-text">
          © 2015 Copyright Kisan E-Store Pvt. Ltd. All Rights Reserved.
        </p>
      </div>
      {/* Copyright Section */}
      <div className="col-md-3 text-center text-md-end">
        
        <div className="social-icons">
          <a href="#facebook" className="social-link">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#google" className="social-link">
            <i className="fab fa-google"></i>
          </a>
          <a href="#twitter" className="social-link">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#linkedin" className="social-link">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default BottomFooter