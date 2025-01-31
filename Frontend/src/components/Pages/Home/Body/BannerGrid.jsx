import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import "./BannerGrid.css";
const BannerGrid = () => {
  return (
    <Container className="banner-grid-section">
        <Row className="g-3">
          {" "}
          {/* g-3 adds a gap between columns */}
          {/* Left Banner */}
          <Col md={6}>
            <div className="banner-grid-item banner-left">
              {" "}
              {/* Wrap inside div */}
              <div className="banner-grid-content">
                <h2 className="banner-grid-heading">
                  Grow Healthier Crops and <br /> Save Big
                </h2>
                <Button className="shop-btn-1">Shop Now</Button>
              </div>
            </div>
          </Col>
          {/* Right Banner */}
          <Col md={6}>
            <div className="banner-grid-item banner-right">
              {" "}
              {/* Wrap inside div */}
              <div className="banner-grid-content">
                <h2 className="banner-grid-heading">
                  UP TO 30% OFF on Top <br /> Agro Products!
                </h2>
                <Button className="shop-btn-2">Shop Now</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
  )
}

export default BannerGrid