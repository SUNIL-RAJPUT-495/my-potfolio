import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import adminDashboardImg from "../../assets/dashboards.jpg"; // Use your admin screenshot

const BlinkitAdmin = () => {
  return (
    <Container className="py-5" style={{ marginTop: "100px" }}>
      <Row className="justify-content-center">
        <Col md={10} lg={9}>
          <Link to="/" className="btn btn-sm btn-outline-secondary mb-4">
            ← Back to Portfolio
          </Link>
          
          <h1 className="fw-bold mb-3">Blinkit Admin Control Center</h1>
          <p className="text-danger fw-bold mb-4">Role-Based Access Control | Inventory Management</p>

          <img 
            src={adminDashboardImg} 
            className="img-fluid rounded shadow-lg mb-5 w-100" 
            alt="Blinkit Admin Dashboard"
            style={{ maxHeight: '500px', objectFit: 'cover' }}
          />

          <div className="content-section mb-5">
            <h3 className="fw-bold mb-4">Admin Panel Capabilities</h3>
            
            <Row className="g-4">
              <Col md={6}>
                <div className="p-3 border rounded h-100 bg-light">
                  <h5 className="fw-bold text-primary">🔐 Secure Login & Authentication</h5>
                  <p className="text-secondary">
                    Integrated JWT Role-Based Access  with secure OTP-based verification using Resend API. 
                    Ensures only authorized personnel can access inventory data.
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div className="p-3 border rounded h-100 bg-light">
                  <h5 className="fw-bold text-success">📦 Product & Category Upload</h5>
                  <p className="text-secondary">
                    Developed a hierarchical management system for categories and sub-categories. 
                    Admins can perform bulk product inventory controls and upload media via Cloudinary SDK
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div className="p-3 border rounded h-100 bg-light">
                  <h5 className="fw-bold text-warning">📑 Order Management</h5>
                  <p className="text-secondary">
                    Built an end-to-end tracking system. Admins can monitor real-time order status updates, 
                    view transaction logs via MongoDB, and manage customer fulfillment workflows.
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div className="p-3 border rounded h-100 bg-light">
                  <h5 className="fw-bold text-info">👁️ Visibility Controls</h5>
                  <p className="text-secondary">
                    Designed a Publish/Unpublish toggle logic. This allows admins to instantly control 
                    which products are visible on the live storefront using Express middleware
                  </p>
                </div>
              </Col>
            </Row>
          </div>

          <div className="bg-dark text-white p-4 rounded shadow-sm d-flex justify-content-between align-items-center flex-wrap">
            <div>
              <h5 className="mb-1">Want to test the Admin Panel?</h5>
              <p className="small mb-0 text-light opacity-75">Contact me for temporary login credentials.</p>
            </div>
            <div className="d-flex gap-3 mt-3 mt-sm-0">
              <Button variant="outline-light" href="https://blinkit-client-ten.vercel.app/admin" target="_blank">
                Open Admin Live
              </Button>
              <Button variant="primary" href="https://github.com/SUNIL-RAJPUT-495" target="_blank">
                GitHub Repo
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default BlinkitAdmin;