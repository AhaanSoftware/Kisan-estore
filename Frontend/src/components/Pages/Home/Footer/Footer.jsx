import React from "react";
import Logo from "../../../Images/Logo.png";
import Apple from "../../../Images/Apple.png";
import Barcode from "../../../Images/barcode.png";
import Googlepay from "../../../Images/Googlepay.png";
import "./Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="container">
        <div className="row">
          {/* KISANeSTORE Description */}
          <div className="col-lg-6 col-md-6 footer-grid">
            <img
              src={Logo}
              alt="Kisan E-Store"
              className="footer-logo"
            />
            <p>
              KISANeSTORE is a venture of Kisan E-Store Pvt. Limited, which is
              the First Agro-eStore in India to launch a complete range of
              agro-inputs & agro-services. We have associated the complete
              Ag-industry under one roof for the successful e-business of
              KISANeSTORE.
            </p>
            <p>
              Kisan E-Store Pvt. Limited is into the business of E-marketing of
              Agro Inputs like Bio-Pesticides, Seeds, Fertilizers, Insecticides,
              Tissue-Culture, Green House, Irrigation Systems, Cattle care, Farm
              Machinery & Equipments.
            </p>
            <h6>AVAILABLE ON</h6>
            <div className="d-flex">
              <img
                src={Apple}
                alt="Google Play"
                className="app-store"
              />
              <img src={Googlepay} alt="App Store" className="app-store" />
            </div>
          </div>

          {/* Useful Links */}
          <div className="col-lg-3 col-md-6 footer-grid">
            <h5>USEFUL LINKS</h5>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Guarantee / Warranty</li>
              <li>Kisanestore License</li>
              <li>Farmer Benefits</li>
              <li>Delivery Information</li>
              <li>Track My Order</li>
              <li>Sitemap</li>
              <li>Feedback Form</li>
              <li>Inquiry</li>
            </ul>
          </div>

          {/* Why Buy From Us */}
          <div className="col-lg-3 col-md-6 footer-grid">
            <h5>WHY BUY FROM US</h5>
            <ul>
              <li>Frequently Asked</li>
              <li>Questions in English</li>
              <li>Listing of your Company's Products in KeS</li>
              <li>Returns and Exchanges</li>
            </ul>
            <h5>DOWNLOAD OUR APP</h5>
            <img src={Barcode} alt="QR Code" className="qr-code" />
            <p>Download the App Now</p>
          </div>
          
        </div>
      </div>
    </footer>

  );
};

export default Footer;
