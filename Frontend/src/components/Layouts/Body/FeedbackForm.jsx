import React from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import FeedbackImg from "../Images/feedback.jpg";
import "./FeedbackForm.css"
const FeedbackForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container fluid className="p-0">
      <div
        style={{
          backgroundImage: `url(${FeedbackImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "350px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container>
          <h1 className="text-white contact-us-label">Feedback</h1>
        </Container>
      </div>
      <Container className="feedback-container py-5">
        <div className="feedback-container-lable">
        <h3 className="text-center">Feedback Form</h3>
        <p className="text-center">
          Fill out the form below, and a representative will respond to your
          request.
        </p>
        </div>
        
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-4">
                <Form.Label className="contact-us-form-label">Name</Form.Label>
                <Form.Control
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Enter Your Name*"
                  className="contact-us-form-input-field"
                />
                {errors.name && (
                  <span className="text-danger">This field is required</span>
                )}
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-4">
                <Form.Label className="contact-us-form-label">
                  Phone No
                </Form.Label>
                <Form.Control
                  type="text"
                  {...register("phone", { required: true })}
                  placeholder="Enter Your Phone Number*"
                  className="contact-us-form-input-field"
                />
                {errors.phone && (
                  <span className="text-danger">This field is required</span>
                )}
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-4">
                <Form.Label className="contact-us-form-label">
                  Email Address
                </Form.Label>
                <Form.Control
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Enter Your Email*"
                  className="contact-us-form-input-field"
                />
                {errors.email && (
                  <span className="text-danger">This field is required</span>
                )}
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-4">
                <Form.Label className="contact-us-form-label">
                  Address
                </Form.Label>
                <Form.Control
                  type="text"
                  {...register("address", { required: true })}
                  placeholder="Enter Your Address*"
                  className="contact-us-form-input-field"
                />
                {errors.address && (
                  <span className="text-danger">This field is required</span>
                )}
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-4">
                <Form.Label className="contact-us-form-label">
                  Street
                </Form.Label>
                <Form.Control
                  type="text"
                  {...register("street", { required: true })}
                  placeholder="Enter Your Street*"
                  className="contact-us-form-input-field"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-4">
                <Form.Label className="contact-us-form-label">
                  Village
                </Form.Label>
                <Form.Control
                  type="text"
                  {...register("village", { required: true })}
                  placeholder="Enter Your Village*"
                  className="contact-us-form-input-field"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-4">
                <Form.Label className="contact-us-form-label">
                  District
                </Form.Label>
                <Form.Control
                  type="text"
                  {...register("district", { required: true })}
                  placeholder="Enter Your District*"
                  className="contact-us-form-input-field"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-4">
                <Form.Label className="contact-us-form-label">State</Form.Label>
                <Form.Control
                  type="text"
                  {...register("state", { required: true })}
                  placeholder="Enter Your State*"
                  className="contact-us-form-input-field"
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-4">
            <Form.Label className="contact-us-form-label">Status</Form.Label>
            <div>
              <Form.Check
                inline
                label="Farmer"
                type="checkbox"
                {...register("status.farmer")}
              />
              <Form.Check
                inline
                label="VLE"
                type="checkbox"
                {...register("status.vle")}
              />
              <Form.Check
                inline
                label="Dealer/Retailer"
                type="checkbox"
                {...register("status.dealer")}
              />
              <Form.Check
                inline
                label="Supplier/Manufacturer"
                type="checkbox"
                {...register("status.supplier")}
              />
            </div>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label className="contact-us-form-label">File</Form.Label>
            <Form.Control type="file" {...register("file")} className="contact-us-form-input-field"/>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label className="contact-us-form-label">Feedback</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              {...register("feedback", { required: true })}
              placeholder="Enter Your Feedback"
              className="contact-us-form-input-field"
            />
            {errors.feedback && (
              <span className="text-danger">This field is required</span>
            )}
          </Form.Group>
          <button className="contact-us-submit-btn" type="submit">
            Submit Feedback
          </button>
        </Form>
        
      </Container>
    </Container>
  );
};

export default FeedbackForm;
