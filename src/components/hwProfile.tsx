import React, { useMemo } from "react";
import { DATAPETS } from "../models/dataPet";
import { Container, Row, Col, Card, Image } from "react-bootstrap";

interface Props {
  petid: string;
  name?: string;
  website?: string;
}

const HWProfile: React.FC<Props> = ({ petid, name, website }) => {
  const id = Number(petid.toString());

  const data = useMemo(() => {
    return DATAPETS.find((x) => Number(x.id) === id);
  }, [id]);

  return (
    <Container className="mt-3">
      <Row>
        <Col lg={12}>
          <Card className="mt-5">
            <Card.Header as="h3">HomeWork By PlaToo</Card.Header>
            <Card.Body className="p-4">
              <Card.Title className="mb-3">HomeWork No. 2</Card.Title>
              <div>
                <Row>
                  <Col lg={6} sm={12}>
                    <Image
                      src={data?.pathimage}
                      alt={data?.name}
                      className="img__profile__com"
                    />
                  </Col>
                  <Col lg={6} sm={12}>
                    <Row>
                      <Col lg={6} sm={6}>
                        <h5>ID: {data?.id}</h5>
                      </Col>
                      <Col lg={6} sm={6}>
                        <h5>Name: {data?.name}</h5>
                      </Col>
                      <Col lg={6} sm={6}>
                        <h5>Pet Type: {data?.pettype}</h5>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HWProfile;
