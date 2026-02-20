import { Container, Row, Col } from "react-bootstrap";
import Directions from "../directions";

export default function MainPage() {
  return (
    <div className="bg-main">
      <Container className="content">
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={7} className="text-center">
            <div className="brand-wordmark">WHO YOU ARE ?</div>
            
            <p className="brand-tagline">Our mind-reading quiz !</p>{" "}
            <span className="d-flex w-100 justify-content-center">
              <Directions />
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
