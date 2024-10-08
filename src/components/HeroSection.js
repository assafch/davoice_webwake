import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DemoContainer from './DemoContainer'; // Import the DemoContainer component

const HeroSection = () => {
    return (
        <Container fluid>
            {/* Hero Section */}
          <Row className="bg-dark text-light p-5">
            <Col md={7} className="text-center text-md-start d-flex flex-column justify-content-center">
              <h1 className="display-4">DaVoice</h1>
              <h2>Voice algorithms on any device</h2>
              <h3>
                Key Word / Wake Word Detection, VAD – Voice activation detection, Speaker Separation.
              </h3>
            </Col>
            <Col md={5} className="d-flex align-items-center justify-content-center">
              <DemoContainer />
            </Col>
          </Row>
        </Container>
    );
}

export default HeroSection;