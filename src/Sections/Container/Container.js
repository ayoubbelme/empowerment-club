import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import './Container.css'

const MyContainer = () => {
  return (
    <div className="my-container" id="home">
      <Container fluid className="text-center text-light p-5">
        <Row className="align-items-center vh-100">
          <Col>
            {/* Animated Heading */}
            <motion.h1
              className="display-4 fw-bold"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Welcome to <span className="title">EMP<span className="club">Club</span></span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              className="lead mt-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              Scientific | Cultural Club
            </motion.p>

            {/* Buttons with Hover Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="d-flex justify-content-center gap-3 mt-4"
            >
              {/* Use motion.button for hover effects */}
              <motion.button
                className="btn btn-primary px-4 py-2 "
                whileHover={{ scale: 1.1 }}
              >
                Join Us
              </motion.button>
              <motion.button
                className="btn btn-outline-light px-4 py-2"
                
                whileHover={{ scale: 1.1 }}
                onClick={() => window.location.href = '#about'} 
              >
                See more
              </motion.button>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyContainer;
