import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import axios from "axios";
import OurCategoryImage from "../Images/category.jpg";
import './OurCategory.css';

const OurCategory = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;
    const [collections, setCollections] = useState([]);

    useEffect(() => {
        const fetchCollections = async () => {
            try {
                const response = await axios.post(
                    "https://kisanestoredev.myshopify.com/api/2023-01/graphql.json",
                    {
                        query: `
                        {
  collections(first: 50, query: "title:seeds") {
    edges {
      node {
        id
        title
        handle
        image {
          src
        }
      }
    }
  }
}


                        `,
                    },
                    {
                        headers: {
                            "Content-Type": "application/json",
                            "X-Shopify-Storefront-Access-Token": "c2c0d5ac5aeae2d629915df7e7e422b6",
                        },
                    }
                );
                setCollections(response.data.data.collections.edges.map(edge => edge.node));
            } catch (error) {
                console.error("Error fetching Shopify collections:", error);
            }
        };

        fetchCollections();
    }, []);

    return (
        <Container fluid className="p-0">
            <div
                style={{
                    backgroundImage: `url(${OurCategoryImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "350px",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Container>
                    <h1 className="text-white contact-us-label">Our Category</h1>
                </Container>
            </div>
            <Container className="our-category">
                <h4>SHOP BY CATEGORY</h4>

                <Row className="mb-3 align-items-center">
                    <Col xs={6}>
                        <h6 className="text-muted">Total Categories: {collections.length}</h6>
                    </Col>
                </Row>

                {/* Collection Grid */}
                <Row>
        {collections.length > 0 ? (
          collections.map((collection) => (
            <Col key={collection.id} md={2} sm={6} xs={12} className="mb-4">
              <Card className="border-0 shadow-sm text-center p-3" style={{ backgroundColor: "#f0fdf4" }}>
                <Card.Img
                  variant="top"
                  src={collection.image?.src || "https://via.placeholder.com/150"}
                  alt={collection.title}
                  className="img-fluid"
                />
                
              </Card>
              <Card.Body>
                  <Card.Title className="d-flex justify-content-center align-item-center small">{collection.title}</Card.Title>
                </Card.Body>
            </Col>
          ))
        ) : (
          <p>No "Seeds" collection found.</p>
        )}
      </Row>
            </Container>
        </Container>
    );
};

export default OurCategory;
