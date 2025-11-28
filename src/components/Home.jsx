import { Container, Row, Col, Button } from "react-bootstrap";
import "../css/home.css";
import personImg from "../assets/person2-DvYIsw9m.png";

export const Home = () => {
  return (
    <>
      <section id="Home">
        <div className="home">
          <section className="pt-5">
            <Container className="pt-5">
              <Row className="pt-5">
                <Col
                  md={6}
                  className="d-flex justify-content-center align-items-center "
                >
                  <div>
                    <p className="fs-1 fw-bold">
                      Hello, I'm <br />
                      Sunil Shekhawat
                    </p>
                    <p className="fs-5 mb-5">
                      I'm a Freelance UI/UX Designer and Developer based in
                      London, England. I strive to build immersive and beautiful
                      web applications through carefully crafted code and
                      user-centric design
                    </p>
                    <Button size="lg" className="mb-5 hello-btn">
                      Say Hello!
                    </Button>
                    <div className="d-flex mt-3">
                      <div className="box m-1 p-2">
                        <h2>15 Y.</h2>
                        <p>Experience</p>
                      </div>
                      <div className="box m-1 p-2">
                        <h2>250+</h2>
                        <p>Projects Completed</p>
                      </div>
                      <div className="box m-1 p-2">
                        <h2>58</h2>
                        <p>Happy Clients</p>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col md={6}>
                  <div className="imag-container">
                    <img
                      src={personImg}
                      className=" w-100 h-100 max-w-134 max-lg-mx-auto aspect-536-636"
                      alt="main-logo"
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="mt-5 mmmmm " id="About">
            <Container className=" rounded p-5 bg-white second-containt mt-5 detail-container">
              <Row className="p-5">
                <Col md={6}>
                  <div className="imag-container bg-light ">
                    <img
                      src={personImg}
                      className="w-100 h-100 max-w-134 max-lg-mx-auto aspect-536-636"
                      alt="main-logo"
                    />
                  </div>
                </Col>

                <Col md={6}>
                  <p>I am a Professional User Experience Designer</p>
                  <p>
                    I design and develop services for customers specializing in
                    creating stylish, modern websites, web services and online
                    stores. My passion is to design digital user experiences.
                  </p>
                  <p>
                    I design and develop services for customers specializing in
                    creating stylish, modern websites, web services.
                  </p>
                  <Button variant="primary" className="me-2 project-btn">
                    My Projects
                  </Button>
                  <Button variant="trasparent" className="cv-btn">Download CV</Button>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </section>
    </>
  );
};
