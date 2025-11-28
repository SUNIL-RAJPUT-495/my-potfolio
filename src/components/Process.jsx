import { Container, Row, Col, Card } from "react-bootstrap";
import "../css/process.css";
export const Process = () => {
  const cardData = [
    {
      image: "/process/d019c75a-09f2-4cc0-82a2-5d2a25fa6919.svg",
      title: " 1. Research",
      Detail:
        "Design meets function in every pixel, blending clarity with intuitive motion.",
    },
    {
      image: "/process/159ee197-399b-42ef-8498-d03eedde4155.svg",
      title: " 2. Analyze",
      Detail:
        "Crafting clean, thoughtful interfaces where form flows seamlessly into function and clarity.",
    },
    {
      image: "/process/12abc71c-1eb0-4fba-9ccf-967effec868f.svg",
      title: " 3. Design",
      Detail:
        "I design seamless digital experiences with precision, purpose, and a touch of elegance.",
    },
    {
      image: "/process/bcca01db-fd37-4455-aa65-71d86fd3b0e6.svg",
      title: "4. Launch",
      Detail:
        "I craft digital products where thoughtful design meets performance-driven, responsive development.",
    },
  ];
  return (
    <>
      <section className="bg-light mb-5" id="Process">
        <Container className="process-container">
          <Row>
            <Col md={6} className="pe-5 d-flex justify-content-center align-items-center">
            <div>
              <p className="fs-1 fw-bold">Work Process</p>
              <p className="fs-5">
                Driven by design and powered by code, I create digital
                interfaces that feel intuitive and perform seamlessly. Every
                layout, animation, and component is crafted with intention —
                merging usability with visual clarity,
              </p>
              <p className="fs-5 ">
                I blend clean design with efficient code to build engaging,
                user-friendly web experiences that stand out.
              </p>
              </div>
            </Col>
            <Col md={6} className=" ">
              <Row className="g-4">
                {cardData.map((card, index) => (
                  <Col xs={12} sm={6} key={index}>
                    <Card className="process-card h-100 text-center">
                    
                      <Card.Body>
                          <Card.Img
                        src={card.image}
                        alt={card.title}
                        className="p-4 w-50"
                      />
                        <Card.Title className="fw-semibold">
                          {card.title}
                        </Card.Title>
                        <Card.Text>{card.Detail}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
