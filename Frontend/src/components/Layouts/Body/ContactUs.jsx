import { useForm, Controller } from "react-hook-form";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "./ContactUs.css";
import ContactBannerImg from "../Images/contactus.jpg";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
const ContactUs = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // You can replace this with the action you'd like to perform
  };
  return (
    <Container fluid className="p-0">
      <div
        style={{
          backgroundImage: `url(${ContactBannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container>
          <h1 className="text-white contact-us-label">Contact Us</h1>
        </Container>
      </div>

      {/* Contact Section */}
      <Container className="py-5" style={{backgroundColor: "#F4FEFF"}}>
        <Row>
          <Col md={6} className="p-3">
            <div className="contact-get-in-touch mb-4">
              <h3>Get in Touch</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>

            <Row className="mb-4">
              <Col xs={1}>
                <div className="contact-details-icon">
                  <FaMapMarkerAlt size={20} />
                </div>
              </Col>
              <Col xs={11}>
                <h5 className="contact-details-address">Address:</h5>
                <p className="contact-details-address-details">
                  404, Vishwamurti Apts, Tower-A, Siddhnath Lake Side Road,
                  Vadodara-390001 Gujarat State, India.
                </p>
                <p className="contact-details-address-details">
                  Regd. Office Address: P-702, Nilkanth Greens, Kalali Road,
                  Vadodara-390012 Gujarat State, India.
                </p>
              </Col>
            </Row>

            <Row className="mb-4">
              <Col xs={1}>
                <div className="contact-details-icon">
                  <FaPhoneAlt size={20} />
                </div>
              </Col>
              <Col xs={11}>
                <h5 className="contact-details-address">Phone:</h5>
                <p>+91 9033303085</p>
              </Col>
            </Row>

            <Row>
              <Col xs={1}>
                <div className="contact-details-icon">
                  <FaEnvelope size={20} />
                </div>
              </Col>
              <Col xs={11}>
                <h5 className="contact-details-address">Email:</h5>
                <p>support@kisanstore.in</p>
              </Col>
            </Row>
            <hr />
            <h5 className="contact-details-address pb-3"> Follow Us:</h5>
            <div className="contact-follow-up-icon">
              <a href="https://facebook.com" className="contact-details-icon">
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://plus.google.com"
                className="contact-details-icon"
              >
                <TiSocialGooglePlus size={30} color="white" />
              </a>

              <a href="https://twitter.com" className="contact-details-icon">
                <FaXTwitter size={20} color="white" />
              </a>

              <a href="https://linkedin.com" className="contact-details-icon">
                <FaLinkedinIn size={20} color="white" />
              </a>
            </div>
          </Col>

          <Col md={6}>
            <div className="contact-us-form">
              <h4>Send a Message</h4>
              <Form
                className="contact-us-form-input"
                onSubmit={handleSubmit(onSubmit)}
              >
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Label className="contact-us-form-label">
                        First Name
                      </Form.Label>
                      <Controller
                        name="firstName"
                        control={control}
                        render={({ field }) => (
                          <Form.Control
                            {...field}
                            type="text"
                            placeholder="Enter First Name"
                            isInvalid={!!errors.firstName}
                            className="contact-us-form-input-field"
                          />
                        )}
                      />
                      {errors.firstName && (
                        <Form.Text className="text-danger">
                          First name is required.
                        </Form.Text>
                      )}
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Label className="contact-us-form-label">
                        Last Name
                      </Form.Label>
                      <Controller
                        name="lastName"
                        control={control}
                        render={({ field }) => (
                          <Form.Control
                            {...field}
                            type="text"
                            placeholder="Enter Last Name"
                            isInvalid={!!errors.lastName}
                            className="contact-us-form-input-field"
                          />
                        )}
                      />
                      {errors.lastName && (
                        <Form.Text className="text-danger">
                          Last name is required.
                        </Form.Text>
                      )}
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Label className="contact-us-form-label">
                        Phone No
                      </Form.Label>
                      <Controller
                        name="phone"
                        control={control}
                        render={({ field }) => (
                          <Form.Control
                            {...field}
                            type="text"
                            placeholder="Enter Phone No"
                            isInvalid={!!errors.phone}
                            className="contact-us-form-input-field"
                          />
                        )}
                      />
                      {errors.phone && (
                        <Form.Text className="text-danger">
                          Phone number is required.
                        </Form.Text>
                      )}
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Label className="contact-us-form-label">
                        Email
                      </Form.Label>
                      <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                          <Form.Control
                            {...field}
                            type="email"
                            placeholder="Enter Email"
                            isInvalid={!!errors.email}
                            className="contact-us-form-input-field"
                          />
                        )}
                      />
                      {errors.email && (
                        <Form.Text className="text-danger">
                          Valid email is required.
                        </Form.Text>
                      )}
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-4">
                  <Form.Label className="contact-us-form-label">
                    Message
                  </Form.Label>
                  <Controller
                    name="message"
                    control={control}
                    render={({ field }) => (
                      <Form.Control
                        {...field}
                        as="textarea"
                        rows={3}
                        placeholder="Enter Message"
                        isInvalid={!!errors.message}
                        className="contact-us-form-input-field"
                      />
                    )}
                  />
                  {errors.message && (
                    <Form.Text className="text-danger">
                      Message is required.
                    </Form.Text>
                  )}
                </Form.Group>
                <button className="contact-us-submit-btn" type="submit">Submit Application</button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>

      <div style={{ width: "100%", height: "400px" }}>
        <iframe
          title="Google Map"
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?q=KisaneStore&t=&z=13&ie=UTF8&iwloc=&output=embed"
          allowFullScreen
        ></iframe>
      </div>
    </Container>
  );
};

export default ContactUs;
