import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./Banner.css";
import { FaBars } from "react-icons/fa";



// Category Data
const categories = [
    {
      name: "Seeds",
      image:
        "http://woocommerce.ahaanmedia.com/wp-content/uploads/2025/01/image-42.png",
    },
    {
      name: "Mushroom",
      image:
        "http://woocommerce.ahaanmedia.com/wp-content/uploads/2025/01/image-37.png",
    },
    {
      name: "Fertilizers",
      image:
        "http://woocommerce.ahaanmedia.com/wp-content/uploads/2025/01/image-41.png",
    },
    {
      name: "Soil Testing Kit",
      image:
        "http://woocommerce.ahaanmedia.com/wp-content/uploads/2025/01/image-40.png",
    },
    {
      name: "Certified Organic Products",
      image:
        "http://woocommerce.ahaanmedia.com/wp-content/uploads/2025/01/image-39.png",
    },
    {
      name: "Water Testing Kits",
      image:
        "http://woocommerce.ahaanmedia.com/wp-content/uploads/2025/01/image-42.png",
    },
    {
      name: "Hydroponics",
      image:
        "http://woocommerce.ahaanmedia.com/wp-content/uploads/2025/01/indian-spices-jpg-500x500-1.png",
    },
  ];
  
  // Banner Images
  const banners = [
    {
      id: 1,
      image:
        "http://woocommerce.ahaanmedia.com/wp-content/uploads/2025/01/Untitled-design-2.jpg",
      title: "Nature's Best for Your Crops",
    },
    {
      id: 2,
      image:
        "http://woocommerce.ahaanmedia.com/wp-content/uploads/2025/01/Untitled-design-4.jpg",
      title: "Grow with Organic Products",
    },
  ];
const Banner = () => {
  return (
    <Container className="home-container">
        <Row className="top-section">
                {/* Left Grid - Categories */}
                <Col md={3} className="categories-section">
                  <div className="categories-header">
                    <FaBars className="menu-icon" />
                    <h4>Categories</h4>
                  </div>
                  <div className="categories-list">
                    {categories.map((category, index) => (
                      <div key={index} className="category-item">
                        <img
                          src={category.image}
                          alt={category.name}
                          className="category-image"
                        />
                        <span>{category.name}</span>
                      </div>
                    ))}
                  </div>
                </Col>
        
                {/* Right Grid - Banner Carousel */}
                <Col md={9} className="banner-section">
                  <Swiper
                    modules={[Autoplay, Navigation]}
                    spaceBetween={10}
                    slidesPerView={1}
                    autoplay={{ delay: 3000 }}
                    className="banner-swiper"
                  >
                    {banners.map((banner) => (
                      <SwiperSlide key={banner.id} className="banner-slide">
                        <img
                          src={banner.image}
                          alt={banner.title}
                          className="banner-image"
                        />
                        <div className="banner-text">
                          <h2 className="banner-title">{banner.title}</h2>
                          <p className="banner-sub-title">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          </p>
                          <Button className="shop-now-btn">Shop Now</Button>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </Col>
              </Row>
    </Container>
  )
}

export default Banner