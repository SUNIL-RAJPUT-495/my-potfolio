import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "../css/services.css";

export const Services = () => {
  const cardDetail = [
    {
      Title: "User Experience (UX)",
      Text: "I design intuitive and enjoyable experiences by understanding user needs, conducting research, and creating wireframes and prototypes that enhance usability.",
    },
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
                I specialize in designing user experiences, crafting engaging
                interfaces, and building robust web applications that deliver
                value and usability.
              </p>
              <p className="fs-5 pe-5 mb-5">
                My approach combines creativity and technical expertise to
                deliver solutions that are both visually appealing and highly
                functional for users.
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
