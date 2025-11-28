import React from 'react'
import { Container, Row, Col, Card, Button } from "react-bootstrap";
export const Blog = () => {
   const cardData = [
    {
      Image: "/blog/blog-1-9asS__eh.jpeg",
      Tital: "Product Admin Dashboard",
      Detail:
        "I focus on crafting smooth, responsive interfaces that balance aesthetic appeal with practical functionality.",
    },
    {
      Image: "/blog/blog-4-C9dcE4M3.jpeg",
      Tital: "Product Admin Dashboard",
      Detail:
        "Designed an intuitive dashboard for product management, emphasizing clarity and user efficiency.",
    },
    {
      Image: "/blog/blog-3-lkBU4Y-F.jpeg",
      Tital: "Product Admin Dashboard",
      Detail:
        "Developed a modern admin panel with a focus on usability and seamless navigation for end users and so on.",
    },
    {
      Image: "/blog/blog-4-C9dcE4M3.jpeg",
      Tital: "Product Admin Dashboard",
      Detail:
        "Created a responsive dashboard layout that adapts smoothly across devices and screen sizes and so on.",
    },
    {
      Image: "/blog/blog-3-lkBU4Y-F.jpeg",
      Tital: "Product Admin Dashboard",
      Detail:
        "Implemented interactive charts and widgets to visualize product data effectively for stakeholders.",
    },
    {
      Image: "/blog/blog-1-9asS__eh.jpeg",
      Tital: "Product Admin Dashboard",
      Detail:
        "Enhanced user experience by streamlining workflows and optimizing interface components and so on.",
    },
  ];
  return (
    <>
      <section className="mt-3" id='Blog'>
        <Container>
          <Row >
            <Col md={12}>
              <p className="text-center fs-1 fs-md-3 fs-lg-5 fw-bold">
                Blog
              </p>
              <p className="text-center fs-5 pb-5">
              Check out my recent blog posts where I share insights on
                <br />
            design, development, and the latest industry trends.
              </p>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="main-con"  >
            {cardData.map((card, index) => (
              <Col md={4} key={index} >
                <Card className="m-2 " style={{ width: "25rem" }}>
                  <Card.Img variant="top" src={card.Image} className='' />
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
          
        </Container>
      </section>
      
    </>
  )
}
