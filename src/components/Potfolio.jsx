import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { projectsData } from "./projectsData";
import "../../src/css/potfolio.css"

export const Potfolio = () => {
  const navigate = useNavigate();

  return (
    <section id="Potfolio" className="py-5  bg-light">
      <Container>
        <div className="text-center mb-5 mt-5">
          <h2 className="fw-bold display-5">My Projects</h2>
          <div className="mx-auto bg-primary mb-3" style={{ height: '3px', width: '60px' }}></div>
        </div>

        <Row className="g-4">
          {projectsData.map((project) => (
            <Col key={project.id} xs={12} sm={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm project-card">
                <Card.Img variant="top" src={project.image} alt={project.title} />
                <Card.Body className="d-flex flex-column p-4">
                  <span className="text-primary small fw-bold mb-2">{project.category}</span>
                  <Card.Title className="fw-bold">{project.title}</Card.Title>
                  <Card.Text className="text-muted flex-grow-1">
                    {project.detail}
                  </Card.Text>
                  <Button 
                    variant="outline-dark" 
                    className="mt-3 align-self-start"
                    onClick={() => navigate(`/project/${project.id}`)}
                  >
                    Case Study
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};