import React from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const Profile: React.FC = () => {
  const { state } = useLocation();
  const { id = "", name = "" } = state;

  return (
    <>
      <Container fluid="md" className="mt-3">
        <h2>Profile</h2>
        <h5>
          {id} {name}
        </h5>
      </Container>
    </>
  );
};

export default Profile;
