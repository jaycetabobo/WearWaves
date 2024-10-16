import React from "react";
import "./style.css";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="footer-row">
          <Col md={3} sm={5} className="box">
            <div className="logo">
              <ion-icon name="water"></ion-icon>
              <h1>WearWaves</h1>
            </div>
            <p>
              Dive into style with WearWaves! Discover our vibrant collection of swimwear designed for beach lovers and water enthusiasts. Your perfect summer awaits!
            </p>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>About Us</h2>
            <ul>
              <li>Our Story</li>
              <li>Swimwear Collections</li>
              <li>Eco-Friendly Practices</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center</li>
              <li>How to Order</li>
              <li>Track Your Order</li>
              <li>Size Guide</li>
              <li>Returns & Exchanges</li>
            </ul>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>Contact Us</h2>
            <ul>
              <li>Zone 8 Zayas, Carmen, CDO</li>
              <li>Email: wendreath13@gmail.com </li>
              <li>Phone: 09362579683</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
