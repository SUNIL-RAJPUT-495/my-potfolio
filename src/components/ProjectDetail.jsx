import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";
import { projectsData } from "./projectsData";

export const ProjectDetail = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = projectsData.find((p) => p.id === parseInt(id));

  if (!project) return <Container className="py-5 mt-5"><h2>Project Not Found</h2></Container>;

  return (
    <Container className="py-5" style={{ marginTop: "100px" }}>
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <Link to="/" className="btn btn-sm btn-link mb-3 p-0 text-decoration-none text-dark">
            ← Back to All Projects
          </Link>
          <h1 className="fw-bold mb-4">{project.title}</h1>
          <img 
            src={project.image} 
            className="img-fluid rounded shadow mb-4 w-100" 
            alt={project.title} 
            style={{ maxHeight: '450px', objectFit: 'cover' }}
          />
          <div className="content-section mb-5">
            <h4 className="fw-bold">Description</h4>
            <p className="fs-5 text-secondary lead">{project.detail}</p>
          </div>
          <div className="d-flex gap-3">
            <Button variant="primary" href={project.demo} target="_blank" className="px-4 py-2">Live Demo</Button>
            <Button variant="outline-dark" href={project.github} target="_blank" className="px-4 py-2">GitHub Code</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};