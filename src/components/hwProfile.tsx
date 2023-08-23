import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const HWProfile: React.FC = () => {
  const { state } = useLocation();
  const { id = "", name = "", pettype = "", pathimage = "" } = state;
  console.log(state);

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
                      src={pathimage}
                      alt={name}
                      className="img__profile__com"
                    />
                  </Col>
                  <Col lg={6} sm={12}>
                    <Row>
                      <Col lg={6} sm={6}>
                        <h5>ID: {id}</h5>
                      </Col>
                      <Col lg={6} sm={6}>
                        <h5>Name: {name}</h5>
                      </Col>
                      <Col lg={6} sm={6}>
                        <h5>Pet Type: {pettype}</h5>
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
