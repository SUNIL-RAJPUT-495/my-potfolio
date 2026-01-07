import { Container, Row, Col, Button } from "react-bootstrap";
import "../css/home.css";
import resume from "../assets/resume_page-0001.jpg"
import laptop from "../assets/code.png"

export const Home = () => {
  const handleClick = () => {
    window.open("https://github.com/SUNIL-RAJPUT-495", "_blank");
  };

  const downlodCV = () => {
    window.open(resume, "_blank");
  };

  return (
    <>
      <section id="Home">
        <div className="home w-100">
          <section className="pt-5">
            <Container >
              <Row className="pt-5 align-items-center">

                {/* TEXT SECTION */}
                <Col
                  xs={12}
                  md={6}
                  className="d-flex justify-content-center align-items-center text-center text-md-start"
                >
                  <div>
                    <p className="fs-1 fw-bold">
                      Hello, I'm <br />
                      Sunil Shekhawat
                    </p>

                    <p className="fs-5 mb-5">
                      I’m a passionate designer and full-stack MERN developer who loves building clean interfaces and smooth digital experiences.
Through projects like mernStake, I focus on writing maintainable code, designing intuitive UI, and delivering real-world solutions.
                    </p>

                    <Button size="lg" className="mb-5 hello-btn">
                      Say Hello!
                    </Button>
                  </div>
                </Col>

                {/* IMAGE SECTION */}
                <Col xs={12} md={6} className="mt-4 mt-md-0">
                  <div className="imag-container">
                    <img
                      src="/123.png"
                      className="w-100 h-100 rounded"
                      alt="main-logo"
                    />
                  </div>
                </Col>

              </Row>
            </Container>
          </section>

          {/* ABOUT SECTION */}
          <section className="mt-5" id="About">
            <Container  className="rounded p-4 p-md-5 bg-white second-containt mt-5 detail-container border">
              <Row className="align-items-center ">
                <Col md={6} xs={12} >
                 <div className=" imag-container" ><img src={laptop} alt="laptop"   /></div>
                 </Col>
                <Col
                  xs={12}
                  md={6}
                  className="d-flex justify-content-center align-items-center text-center text-md-start"
                >
                  <div >
                    <p className="fw-bold fs-2">
                      MERN Stack Developer |Creative Thinker
                    </p>

                    <p>
                      I am a professional MERN Stack Developer with expertise in building modern, responsive, and user-friendly web applications. I combine my front-end and back-end skills with a strong sense of UI/UX design, creating digital experiences that are both visually appealing and highly functional.
                    </p>

                    <p>
                      I specialize in developing stylish, scalable websites and web services, turning ideas into seamless, interactive solutions for users and businesses alike.
                    </p>



                    <Button
                      variant="trasparent"
                      className="cv-btn mb-2"
                      onClick={downlodCV}
                    >
                      Download CV
                    </Button>
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
