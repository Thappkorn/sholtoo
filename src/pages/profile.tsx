import React, { useMemo } from "react";
import { Container } from "react-bootstrap";
import HWProfile from "../components/hwProfile";
import { useLocation } from "react-router-dom";
import { DATAPETS } from "../models/dataProfile";

const Profile: React.FC = () => {
  const { state } = useLocation();
  const id = state;
  console.log(id);

  const data = useMemo(() => {
    if (!id) return [];

    return DATAPETS.find((profile) => profile.id === id.id);
  }, [id]);

  return (
    <>
      <Container className="mt-3">
        <h2>Profile</h2>
      </Container>

      {data && <HWProfile {...data} />}
    </>
  );
};

export default Profile;
