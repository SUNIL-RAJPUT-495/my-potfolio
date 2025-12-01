import { Container, Row, Col, Button } from "react-bootstrap";
import "../css/home.css";

export const Home = () => {
   const handleClick = () => {
  window.open("https://github.com/SUNIL-RAJPUT-495", "_blank");
};
const downlodCV = ()=>{
  window.open("/public/Sunilcv.png", "_blank");
}
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
                      Hello! I'm a passionate designer and developer focused on creating clean, user-friendly interfaces and smooth experiences.
                    </p>
                    <Button size="lg" className="mb-5 hello-btn">
                      Say Hello!
                    </Button>
                    
                  </div>
                </Col>

                <Col md={6}>
                  <div className="imag-container">
                    <img
                      src="../../public/123.png"
                      className=" w-100 h-100 max-w-134 max-lg-mx-auto aspect-536-636 rounded"
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
                      src="../../public/123.png"
                      className="w-100 h-100 object-cover object-top"
                      alt="main-logo"
                    />
                  </div>
                </Col>

                <Col md={6} className="d-flex justify-content-center align-items-center">
                <div>
                  <p className="fw-bold">UI/UX Designer | Front-End Developer | Creative Thinker</p>
                  <p>
                   I am a Professional User Experience Designer and MERN Stack Developer. I design and develop modern, responsive, and user
                  </p>
                  <p>
                    I design and develop services for customers specializing in
                    creating stylish, modern websites, web services.
                  </p>
                  <Button variant="primary" className="me-2 project-btn" onClick={handleClick}>
                    My Projects
                  </Button>
                  <Button variant="trasparent" className="cv-btn" onClick={downlodCV}>Download CV</Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </section>
    </>
  );
};
