import { Col, Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import CertificationCard from "./CertificationCard";
import Microservices from "../../Assets/Certifications/Microservices_Udemy.jpg";
import AWS_CPP_Udemy from "../../Assets/Certifications/AWS_CPP_Udemy.jpg";

function Certifications() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certifications </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few certifications I've completed.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={Microservices}
              isBlog={false}
              title=""
              description="I’ve obtained a certification: Master Microservices with Spring Boot and Spring Cloud from Udemy!"
              />
          </Col>
          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={AWS_CPP_Udemy}
              isBlog={false}
              title=""
              description="I’ve obtained a certification: AWS Certified Cloud Practitioner from Udemy!"
              />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certifications;
