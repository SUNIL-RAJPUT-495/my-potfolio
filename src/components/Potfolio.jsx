import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../css/potfolio.css";

export const Potfolio = () => {
  const cardData = [
    {
      Image: "/Potfolio/card-1-D83uj-qZ.png",
      Tital: "Product Admin Dashboard",
      Detail:
        "I focus on crafting smooth, responsive interfaces that balance aesthetic appeal with practical functionality.",
    },
    {
      Image: "/Potfolio/card-2-BJ8-9N8h.png",
      Tital: "Product Admin Dashboard",
      Detail:
        "Designed an intuitive dashboard for product management, emphasizing clarity and user efficiency.",
    },
    {
      Image: "/Potfolio/card-3-Ka1ll87R.png",
      Tital: "Product Admin Dashboard",
      Detail:
        "Developed a modern admin panel with a focus on usability and seamless navigation for end users and so on.",
    },
    {
      Image: "/Potfolio/card-4-1lvzje-u.png",
      Tital: "Product Admin Dashboard",
      Detail:
        "Created a responsive dashboard layout that adapts smoothly across devices and screen sizes and so on.",
    },
    {
      Image: "/Potfolio/card-5-TrbU7d8r.png",
      Tital: "Product Admin Dashboard",
      Detail:
        "Implemented interactive charts and widgets to visualize product data effectively for stakeholders.",
    },
    {
      Image: "/Potfolio/card-6-CMi2awuo.png",
      Tital: "Product Admin Dashboard",
      Detail:
        "Enhanced user experience by streamlining workflows and optimizing interface components and so on.",
    },
  ];
  return (
    <>
    <section id="Potfolio">
      <section className="mt-3">
        <Container>
          <Row>
            <Col md={12}>
              <p className="text-center fs-1 fs-md-3 fs-lg-5 fw-bold">
                Potfolio
              </p>
              <p className="text-center fs-5 pb-5">
                Here's a selection of my recent work, showcasing my skills in{" "}
                <br />
                creating user-centric and visually appealing interfaces.
              </p>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            {cardData.map((card, index) => (
              <Col md={4} key={index}>
                <Card className="m-2" style={{ width: "25rem" }}>
                  <Card.Img variant="top" src={card.Image} />
                  <Card.Body className="p-4">
                    <p>UI-UX DESIGN</p>
                    <Card.Title>{card.Tital}</Card.Title>
                    <Card.Text>{card.Detail}</Card.Text>
                    <Button variant="transprant" className="border p-2">
                      Case Study
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4">
            <Button variant="primary" size="sm" className="p-2">
              More Project
            </Button>
          </div>
        </Container>
      </section>
      <section className="section2">
        <Container>
          <Row>
            <Col md={12}>
              <p className="fs-1 fw-bold text-center text-white">
                Do you have a Project Idea? <br />
                Let's discuss your project!
              </p>
              <p className="text-center fs-5 text-white">
                I'm always open to discussing new projects and creative ideas.
                Let's <br />
                connect and build something amazing together.
              </p>
              <div className="text-center"><Button variant="primary" size="sm" className="p-2">
                Let's work Together
              </Button></div>
              
            </Col>
          </Row>
        </Container>
      </section>
      </section>
    </>
  );
};
