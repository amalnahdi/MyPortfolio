import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Amal Nahdi</span> from{" "}
            <span className="purple">Tunisia.</span>
            <br />
            I am currently a Software Engineering student at ESPRIT in Ariana,
            Tunisia, and I will be graduating in June 2025.
            <br />
            I have experience as a Full Stack Developer, with skills in Symfony,
            PHP, Vue.js, Angular, Spring Boot, Docker, and CI/CD, and I have worked
            on several key projects, including event management and ski management
            systems.
            <br />
            <br />
            Apart from coding, some other activities that I love to do are:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing technical blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Amal Nahdi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
