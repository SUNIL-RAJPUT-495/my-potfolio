import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../css/contact.css";
import { useState } from "react";

export const Contact = () => {
  const [formData, setData] = useState({
    Name: "",
    Email: "",
    Location: "",
    Budget: "",
    Submit: "",
    Message: "",
  });
  const handleChange = (e) => { 
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  console.log(formData)
  return (
    <>
      <div className="main-deev pt-5">
        <section id="Contact">
          <Container>
            
          </Container>
        </section>
       
        <section className="section-1">
          <Container className="border rounded mt-5 mb-5 p-5 main-box bg-white">
            <Row>
              <Col>
                <p className="fs-2 fw-bold">Let’s discuss your Project</p>
                <p className="fs-5">
                  I'm available for freelance work. Drop me a line if you have a
                  project you think I'd be a good fit for.
                </p>
                <span>
                  <p className="fw-bold">Address:</p>
                  <p>jhotwara , jaipur (Rajasthan) </p>
                </span>
                <span>
                  <p className="fw-bold">My Email:</p>
                  <p>Sunilsinghshekhawat495@gmail.com</p>
                </span>
                <span>
                  <p className="fw-bold">Call Me Now:</p>
                  <p>9928659067</p>
                </span>
              </Col>
              <Col>
                <p className="fs-5 pt-5">
                  I'm always open to discussing product design work or
                  partnership opportunities.
                </p>

                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formName">
                    <Form.Control
                      type="text"
                      placeholder="Name*"
                      className=" mb-4 input fs-5 pb-2"
                      
                      onChange={handleChange}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group controlId="formName">
                    <Form.Control
                      className="input mb-4 fs-5 pb-2"
                      type="Email"
                      placeholder="Email*"
                    
                      onChange={handleChange}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group controlId="formName">
                    <Form.Control
                      className="input mb-4 fs-5 pb-2"
                      type="text"
                      placeholder="Location*"
                      
                      onChange={handleChange}
                    ></Form.Control>
                  </Form.Group>
                  <div className="d-flex gap-3 ">
                    <Form.Group controlId="formBudget" className="w-25">
                      <Form.Control
                        className="input mb-4 fs-5 pb-2"
                        type="number"
                        placeholder="Budget*"
                        
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="formSubject" className="w-75">  
                      <Form.Control
                        className="input mb-4 fs-5 pb-2"
                        type="text"
                        placeholder="Subject*"
                       
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </div>

                  <Form.Group controlId="formName">
                    <Form.Control
                      className="input mb-4 fs-5 pb-2"
                      type="text"
                      placeholder="Message*"
                     
                      onChange={handleChange}
                    ></Form.Control>
                  </Form.Group>
                  <Button type="submit">Submit</Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </section>
        <footer className="main-div">
          <Container >
            <div className="">
            <div className="fs-5 fw-bold text-white">Sunil shekhawat</div>
            <div>
              <ul className="d-flex justify-content-between  list-unstyled align-items-center text-white ">
                <li>Home</li>
                <li>About</li>
                <li>Process</li>
                <li>Potfolio</li>
                <li>Blog</li> 
                <li>Services</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="text-white">
              <p>copyright @ 2025 picto.</p>
            </div>
            </div>
          </Container>
          <div className="text-white text-center fs-5 pt-5">
            <p>Developed with by Sunil Singh</p>
          </div>
        </footer>
      </div>
    </>
  );
};
