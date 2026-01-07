import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import blinkit from "../assets/blinkit.webp"
import dashboard from "../assets/dashboards.jpg"
import "../css/potfolio.css" 


export const Potfolio = () => {
  const navigate = useNavigate();

  return (
    <section id="Potfolio" className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5 mt-5">
          <h2 className="fw-bold display-5">My Projects</h2>
          <div className="mx-auto bg-primary mb-3" style={{ height: '3px', width: '60px' }}></div>
        </div>

        <Row className="g-4">
          

          <Col xs={12} sm={6} lg={4}>
            <Card className="h-100 border-0 shadow-sm project-card">
              <Card.Img variant="top" src={blinkit} alt="Blinkit Clone" />
              <Card.Body className="d-flex flex-column p-4">
                <span className="text-primary small fw-bold mb-2">MERN Stack</span>
                <Card.Title className="fw-bold">Blinkit Clone – Full-Stack Grocery Platform</Card.Title>
                <Card.Text className="text-muted flex-grow-1">
                  High-performance marketplace with real-time navigation, multi-item cart, and admin dashboard.
                </Card.Text>
                <Button variant="outline-dark" className="mt-3 align-self-start" onClick={() => navigate("/blinkitProject")}>
                  Case Study
                </Button>
              </Card.Body>
            </Card>
          </Col>



          <Col xs={12} sm={6} lg={4}>
            <Card className="h-100 border-0 shadow-sm project-card">
              <Card.Img variant="top" src={dashboard} alt="Admin Dashboard" />
              <Card.Body className="d-flex flex-column p-4">
                <span className="text-primary small fw-bold mb-2">React & Node.js</span>
                <Card.Title className="fw-bold">Product Admin Dashboard</Card.Title>
                <Card.Text className="text-muted flex-grow-1">
                  Enterprise-grade inventory system with CRUD capabilities and debounced searching.
                </Card.Text>
                <Button variant="outline-dark" className="mt-3 align-self-start" onClick={() => navigate("/BlinkitAdmin")}>
                  Case Study
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} lg={4}>
            <Card className="h-100 border-0 shadow-sm project-card">
              <Card.Img variant="top" src={dashboard} alt="Portfolio Site" />
              <Card.Body className="d-flex flex-column p-4">
                <span className="text-primary small fw-bold mb-2">UI/UX & React</span>
                <Card.Title className="fw-bold">Personal Portfolio Website</Card.Title>
                <Card.Text className="text-muted flex-grow-1">
                  Responsive 3D-interactive portfolio using Framer Motion with optimized assets.
                </Card.Text>
                <Button variant="outline-dark" href="https://my-potfolio-ten-beta.vercel.app" className="mt-3 align-self-start" onClick={() => navigate("/portfolioDetails")}>
                  Case Study
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};