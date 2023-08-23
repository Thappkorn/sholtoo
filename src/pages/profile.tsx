import React from "react";
import { Container } from "react-bootstrap";
import HWProfile from "../components/hwProfile";

const Profile: React.FC = () => {
  return (
    <>
      <Container className="mt-3">
        <h2>Profile</h2>
      </Container>

      <HWProfile />
    </>
  );
};

export default Profile;
