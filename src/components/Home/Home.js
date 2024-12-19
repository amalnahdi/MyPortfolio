import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/rem.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import styled from "styled-components";
import { motion } from "framer-motion";

// Styled components for modern look
const Section = styled.section`
  position: relative;
  padding: 0;
`;

const Heading = styled.h1`
  font-size: 3.5rem;
  padding-bottom: 20px;
  font-weight: 700;
  color: #333;
  letter-spacing: 2px; /* Spacing for modern text */
`;

const SubHeading = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  color: #6a4cfc;
  margin-bottom: 20px;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const HomeImg = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease; /* Smooth transition effect for hover */

  &:hover {
    transform: scale(1.05); /* Subtle zoom effect on hover */
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15); /* Increased shadow */
  }
`;

function Home() {
  return (
    <Section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={7}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                <Heading>
                  Hi There!{" "}
                  <span role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </Heading>
                <SubHeading>
                  I'M <strong>Amal Nahdi</strong>
                </SubHeading>
                <div style={{ padding: "50px 0", textAlign: "left" }}>
                  <Type />
                </div>
              </motion.div>
            </Col>

            <Col md={5}>
              <ImageWrapper>
                <HomeImg src={homeLogo} alt="Home" />
              </ImageWrapper>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </Section>
  );
}

export default Home;
