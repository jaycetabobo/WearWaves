import { Col, Container, Row } from "react-bootstrap";
import "./slidercard.css";

const SlideCard = ({ title, desc, cover }) => {
  return (
    <Container className="box" style={{ backgroundImage: `url(${cover})` }}>
      <Row>
        <Col md={6} className="text-container">
          <h1>{title}</h1>
          <p>{desc}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default SlideCard;
