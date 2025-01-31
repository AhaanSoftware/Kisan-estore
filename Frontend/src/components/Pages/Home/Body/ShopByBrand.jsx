import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button,  } from "react-bootstrap";
import "./ShopByBrand.css";
import brandsData from "../../../brand.json";

const brandsection = [
    {
      title: "SHOP BY BRANDS",
      products: brandsData.highTechProducts,
      navigationId: "shop-by-brands",
    },
  ];

const ShopByBrand = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    setBrands(brandsData);
  }, []);
  return (

    
    <Container className="home-container">

        {brandsection.map((brandsection) => (
                <Container
                  className="shop-by-brands-container"
                  key={brandsection.navigationId}
                >
                  <div className="d-flex align-items-center">
                    <h2 className="shop-by-brand-text">{brandsection.title}</h2>
                    <hr className="flex-grow-1 mx-3" />
                    <Button className="view-brands-btn">View All Products</Button>
                  </div>
                  <Row className="brand-grid">
                    {brands.map((brand) => (
                      <Col
                        key={brand.id}
                        xs={6}
                        sm={4}
                        md={3}
                        lg={2}
                        className="brand-item"
                      >
                        <div className="brand-box">
                          <img
                            src={brand.image}
                            alt={brand.name}
                            className="brand-logo"
                          />
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Container>
              ))}
    </Container>
  )
}

export default ShopByBrand