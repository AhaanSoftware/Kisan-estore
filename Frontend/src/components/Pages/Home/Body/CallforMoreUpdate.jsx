import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./CallforMoreUpdate.css";

const CallforMoreUpdate = () => {
  return (
    <div className="cta-section-wrapper">
    <Container className="home-container">
      <Container className="cta-section">
        <Row className="align-items-center">
          <Col md={6} className="cta-image"></Col>
          <Col md={6} className="cta-content">
            <h2>Call for More Update</h2>
            <p>
              Please enter your 10 digit mobile number to get promotional offers
              and discount information.
            </p>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Enter 10 digit mobile number"
                  className="cta-input"
                />
              </Form.Group>
              <Button className="cta-button">Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
    </div>
  );
};

export default CallforMoreUpdate;
