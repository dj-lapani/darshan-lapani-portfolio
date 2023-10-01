import { Col, Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import CertificationCard from "./CertificationCard";
import UdemyMicroservices from "../../Assets/Certifications/Microservices_Udemy.jpg";
import UdemyAwsCPP from "../../Assets/Certifications/AWS_CPP_Udemy.jpg";
import UdemySpringBoot from "../../Assets/Certifications/udemy_spring_boot.jpg";
import UdemyHibernateJPA from "../../Assets/Certifications/udemy_hibernate_jpa.jpg";
import UdemyFunctionalProgramming from "../../Assets/Certifications/udemy_functional_programming.jpg";
import UdemyReactJS from "../../Assets/Certifications/udemy_react_js.jpg";
import AwsCPP from "../../Assets/Certifications/AWS_CCP.jpg";

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
              imgPath={AwsCPP}
              isBlog={false}
              title=""
              description="I’ve obtained a certification: Certified Cloud Practitioner from AWS!"
              />
          </Col>
          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={UdemyMicroservices}
              isBlog={false}
              title=""
              description="I’ve obtained a certification: Master Microservices with Spring Boot and Spring Cloud from Udemy!"
              />
          </Col>
          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={UdemyAwsCPP}
              isBlog={false}
              title=""
              description="I’ve obtained a certification: AWS Certified Cloud Practitioner from Udemy!"
              />
          </Col>
          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={UdemySpringBoot}
              isBlog={false}
              title=""
              description="I’ve obtained a certification: Spring Boot Fundamentals from Udemy!"
              />
          </Col>
        
          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={UdemyHibernateJPA}
              isBlog={false}
              title=""
              description="I’ve obtained a certification: Java Persistence: Hibernate and JPA Fundamentals from Udemy!"
              />
          </Col>
          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={UdemyFunctionalProgramming}
              isBlog={false}
              title=""
              description="I’ve obtained a certification: Learn Java Functional Programming with Lambdas and Streams from Udemy!"
              />
          </Col>
          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={UdemyReactJS}
              isBlog={false}
              title=""
              description="I’ve obtained a certification: React - The Complete Guide (incl Hooks, React Router, Redux) from Udemy!"
              />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certifications;
