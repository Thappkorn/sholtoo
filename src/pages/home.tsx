import React from "react";
import { Container } from "react-bootstrap";
import HomeWorkOne from "../components/homeworkone";
import HomeWorkTwo from "../components/homeworktwo";
import "../assets/css/main.css";

const Home: React.FC = () => {
  return (
    <>
      <Container className="mt-3">
        <h2>Home</h2>
      </Container>

      <HomeWorkOne />
      <HomeWorkTwo />
    </>
  );
};

export default Home;
