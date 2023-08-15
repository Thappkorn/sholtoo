import React from "react";
import { Container } from "react-bootstrap";
import HomeWorkOne from "../components/homeworkone";

const Home: React.FC = () => {
  return (
    <>
      <Container fluid="md" className="mt-3">
        <h2>Home</h2>
      </Container>

      <HomeWorkOne />
    </>
  );
};

export default Home;
