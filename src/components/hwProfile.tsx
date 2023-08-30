import React, { useMemo } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Image,
  Form,
  Button,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface Props {
  id: number;
  pathimage: string;
  name: string;
  lastname: string;
  age: string;
  position: string;
  gender: string;
}

const HWProfile: React.FC<Props> = ({
  id,
  name,
  lastname,
  age,
  pathimage,
  position,
  gender,
}) => {
  const navigate = useNavigate();
  const MaleChecked = useMemo(() => {
    if (gender === "Male") return true;

    return false;
  }, [gender]);
  const FemaleCheked = useMemo(() => {
    if (gender === "Female") return true;

    return false;
  }, [gender]);

  return (
    <Container className="mt-3">
      <Row>
        <Col lg={12}>
          <Card className="mt-5">
            <Card.Header as="h3">HomeWork By PlaToo</Card.Header>
            <Card.Body className="p-4">
              <Card.Title className="mb-3">Profile No. {id}</Card.Title>
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
                        <Form.Group className="mb-3">
                          <Form.Label className="label__profile">
                            Name :
                          </Form.Label>
                          <Form.Control value={name} name="name"></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col lg={6} sm={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="label__profile">
                            LastName :
                          </Form.Label>
                          <Form.Control
                            value={lastname}
                            name="lastname"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col lg={6} sm={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="label__profile">
                            Age :
                          </Form.Label>
                          <Form.Control value={age} name="age"></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col lg={6} sm={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="label__profile">
                            Position :
                          </Form.Label>
                          <Form.Control
                            value={position}
                            name="position"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col lg={6} sm={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="label__profile">
                            Gender :
                          </Form.Label>
                          <Form.Check
                            type="radio"
                            name="gender"
                            label="Male"
                            id="male"
                            checked={MaleChecked}
                          />
                          <Form.Check
                            type="radio"
                            name="gender"
                            label="Female"
                            id="female"
                            checked={FemaleCheked}
                          />
                        </Form.Group>
                      </Col>
                      <Col xs={12}>
                        <Button variant="success" className="btn__update">
                          Save
                        </Button>
                        <Button
                          variant="secondary"
                          className="btn__update"
                          onClick={() => navigate("/")}
                        >
                          Back
                        </Button>
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
