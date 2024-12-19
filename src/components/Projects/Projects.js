import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Data-governance"
              description="A collaborative chat platform designed to serve as a personal workspace or social hub for resource sharing and real-time interactions. Built using React.js, Material-UI, and Firebase, it incorporates advanced functionalities such as real-time messaging, image sharing, and message reactions. My contributions focused on implementing secure user authentication through JSON Web Tokens (JWT), ensuring robust access control and session management. Additionally, I developed the profile management system, enabling users to customize and manage their personal profiles seamlessly while maintaining a high standard of security and data integrity."
              ghLink="https://github.com/ibrahim-kh-1999/PiTitans.git"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="DEVOPS"
              description="A comprehensive DevOps project focused on automating software delivery pipelines and enhancing system observability. The project involved setting up a robust CI/CD pipeline using Jenkins to automate build, test, and deployment processes. Docker and Docker Compose were utilized to containerize the application and manage multi-container environments efficiently. Nexus was integrated as an artifact repository for secure and streamlined dependency management. Additionally, Prometheus and Grafana were implemented to monitor system performance and visualize metrics, ensuring real-time observability and reliability of the infrastructure. This project exemplifies the adoption of modern DevOps practices to achieve scalability, resilience, and operational efficiency."
              ghLink="https://github.com/amalnahdi/ProjetEvent.git"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Developed a microservices-based architecture with two services: one built using Spring Boot and MySQL, and the other with Node.js and PostgreSQL. Implemented service discovery using Eureka Server to enable dynamic routing and ensure seamless communication between microservices."
              ghLink="https://github.com/amalnahdi/StationSKI-MSC.git"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Designed and developed a PFE project leveraging Python and Laravel to create a job-matching platform that connects potential employees with suitable opportunities based on their skills. The system also includes a feature for generating professional CVs, ensuring an efficient and personalized user experience."
              ghLink="https://github.com/amalnahdi/worker_rank.git"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          {/* Hidden Projects */}
          {/*
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace and thus helping in suicide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and TensorFlow backend. The classifier successfully predicted various types of human emotions. The highest accuracy obtained with the model was 60.1%. Then used OpenCV to detect the face in an image and pass the face to the classifier to predict the person's emotion."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col>
          */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
