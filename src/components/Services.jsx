import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "../css/services.css";

export const Services = () => {
  const cardDetail = [
    {
      Title: "Web Development (MERN Stack) Services",
      Text: "I build fast, modern, and responsive web applications using MongoDB, Express, React, and Node.js. My focus is on creating scalable, secure, and user-friendly digital solutions tailored to client needs."},
    {
      Title: "User Interface (UI)",
      Text: "I craft visually appealing and consistent interfaces, focusing on layout, color, and typography to ensure a seamless and engaging user journey.",
    },
    {
      Title: "Web Development",
      Text: "I build responsive and high-performance web applications using modern technologies, ensuring accessibility, scalability, and maintainability.",
    },
  ];
  return (
    <>
      <section className="main-section" id="Services">
        <Container>
          <Row>
            <Col md={6}>
              <p className="fs-1 fw-bold  ">What I do?</p>
              <p className="fs-5 pe-5">
                I specialize in designing seamless user experiences, creating visually appealing interfaces, and developing powerful MERN-based web applications that provide real value to my clients.
              </p>
              <p className="fs-5 pe-5 mb-5">
                By merging creative insight with technical precision, I craft digital solutions that not only look great but also deliver smooth, meaningful user experiences.
              </p>
              <div className="mb-5">
                <Button variant="primary" size="sm" className="p-2">
                  Say Hello!
                </Button>
              </div>
            </Col>
            <Col md={6}>
             
                {cardDetail.map((card, index) => (
                  <Col  key={index}>
                    <Card className="w-100 mb-4 hover-card">
                      <Card.Body>
                        <Card.Title>{card.Title}</Card.Title>
                        <Card.Text>{card.Text}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
