import React, { useEffect, useState } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./BestOffer.css";
import { PiHandbagBold } from "react-icons/pi";
import productsData from "../../../products.json";

const bestofferssections = [
  {
    title: "BEST OFFERS",
    products: productsData.bestOffers,
    navigationId: "best-offers",
  },
];

const BestOffer = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const handleMouseEnter = (productId) => {
    setHoveredProduct(productId);
  };

  const handleMouseLeave = () => {
    setHoveredProduct(null);
  };

  return (
    <div className="best-offers-wrapper">
      {/* Full-width background */}
      <Container className="home-container">
        {bestofferssections.map((section) => (
          <Container className="product-section" key={section.navigationId}>
            <Row className="d-flex align-items-center">
              <div className="d-flex align-items-center">
                <h2 className="shop-by-brand-text">{section.title}</h2>
                <hr className="flex-grow-1 mx-3" />
                <Button className="view-brands-btn">View All Products</Button>
              </div>
            </Row>

            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                576: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
                1200: { slidesPerView: 5 },
              }}
              navigation={{
                nextEl: `.swiper-button-next-${section.navigationId}`,
                prevEl: `.swiper-button-prev-${section.navigationId}`,
              }}
              className="product-swiper"
            >
              {section.products.map((product) => (
                <SwiperSlide
                  key={product.id}
                  className="product-card"
                  onMouseEnter={() => handleMouseEnter(product.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="product-content">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image"
                    />
                    <h4 className="product-name">
                      {product.name.split(" ").slice(0, 10).join(" ")}
                    </h4>
                    <p className="product-price">
                      <span className="new-price">{product.price}</span>
                      <span className="old-price">{product.oldPrice}</span>
                    </p>
                    <div
                      className={`button-group ${
                        hoveredProduct === product.id ? "visible" : ""
                      }`}
                    >
                      <Button className="buy-now-btn">Buy Now</Button>
                      <Button className="cart-btn">
                        <PiHandbagBold />
                      </Button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div
              className={`swiper-button-prev swiper-button-prev-${section.navigationId}`}
            ></div>
            <div
              className={`swiper-button-next swiper-button-next-${section.navigationId}`}
            ></div>
          </Container>
        ))}
      </Container>
    </div>
  );
};

export default BestOffer;
