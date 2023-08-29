import React, { useMemo } from "react";
import { Container } from "react-bootstrap";
import HWProfile from "../components/hwProfile";
import { useLocation } from "react-router-dom";
import { DATAPETS } from "../models/dataPet";

const Profile: React.FC = () => {
  const { state } = useLocation();
  const id = Number(state.id.toString());

  const data = useMemo(() => {
    return DATAPETS.find((profile) => Number(profile.id) === id);
  }, [id]);

  return (
    <>
      <Container className="mt-3">
        <h2>Profile</h2>
      </Container>

      {id !== 0 && <HWProfile ProfileID={data} />}
    </>
  );
};

export default Profile;
