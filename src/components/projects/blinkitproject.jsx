import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Sahi import
import blinkit from "../../assets/blinkit.webp";

const BlinkitProject = () => {
  return (
    <Container className="py-5" style={{ marginTop: "100px" }}>
      <Row className="justify-content-center">
        <Col md={10} lg={9}>
          <Link to="/" className="btn btn-sm btn-outline-secondary mb-4">
            ← Back to Portfolio
          </Link>
          
          <h1 className="fw-bold mb-3">Blinkit Clone – Full-Stack Grocery Delivery Platform</h1>
          <p className="text-primary fw-bold mb-4">MERN Stack | Redux Toolkit | Cloudinary</p>

          <img 
            src={blinkit} 
            className="img-fluid rounded shadow-lg mb-5 w-100" 
            alt="Blinkit Clone"
            style={{ maxHeight: '500px', objectFit: 'cover' }}
          />

          <div className="content-section mb-5">
            <h3 className="fw-bold mb-3">Project Overview</h3>
            <p className="fs-5 text-secondary">
              Engineered a high-performance Full-Stack Marketplace featuring real-time category navigation 
              and a robust multi-item cart system[cite: 12]. Built using MongoDB, Express, React, and Node.js.
            </p>
            
            <h4 className="fw-bold mt-4">Key Features:</h4>
            <ul>
              <li><strong>Admin Ecosystem:</strong> Managed Hierarchical Categories, sub-categories, and bulk product inventory[cite: 13].</li>
              <li><strong>Advanced Backend:</strong> Integrated JWT Role-Based Access and OTP verification via Resend API[cite: 14].</li>
              <li><strong>Order Workflow:</strong> End-to-end tracking system to monitor status and transaction logs[cite: 15].</li>
              <li><strong>Media Optimization:</strong> Cloudinary SDK for fast image loading via CDN[cite: 16].</li>
            </ul>
          </div>

          <div className="d-flex flex-wrap gap-3 bg-light p-4 rounded shadow-sm">
            <div className="me-4">
              <span className="fw-bold d-block mb-2">Customer Panel:</span>
              <Button variant="primary" href="https://blinkit-client-ten.vercel.app/" target="_blank" className="px-4">
                View Site
              </Button>
            </div>
            <div className="me-4">
              <span className="fw-bold d-block mb-2">Admin Dashboard:</span>
              <Button variant="dark" href="https://blinkit-client-ten.vercel.app/admin" target="_blank" className="px-4">
                Admin Demo
              </Button>
            </div>
            <div>
              <span className="fw-bold d-block mb-2">Source Code:</span>
              <Button variant="outline-dark" href="https://github.com/SUNIL-RAJPUT-495" target="_blank" className="px-4">
                GitHub
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default BlinkitProject;