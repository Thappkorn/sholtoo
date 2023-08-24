import React from "react";
import { Container } from "react-bootstrap";
import HWProfile from "../components/hwProfile";
import { useLocation } from "react-router-dom";

const dataProfile = [
  { name: "Lenovo Thinkpad 41A4298", website: "google" },
  { name: "Lenovo Thinkpad 41A2222", website: "google" },
  { name: "Lenovo Thinkpad 41Awww33", website: "yahoo" },
  { name: "Lenovo Thinkpad 41A424448", website: "google" },
  { name: "Lenovo Thinkpad 41A429rr8", website: "ebay" },
  { name: "Lenovo Thinkpad 41A429ff8", website: "ebay" },
  { name: "Lenovo Thinkpad 41A429ss8", website: "rediff" },
  { name: "Lenovo Thinkpad 41A429sg8", website: "yahoo" },
];

const Profile: React.FC = () => {
  const { state } = useLocation();

  return (
    <>
      <Container className="mt-3">
        <h2>Profile</h2>
      </Container>

      <HWProfile petid={state.id} {...dataProfile} />
    </>
  );
};

export default Profile;
