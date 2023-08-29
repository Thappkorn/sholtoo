import React from "react";
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
  ProfileID: any;
}

const HWProfile: React.FC<Props> = ({ ProfileID }) => {
  const navigate = useNavigate();
  return (
    <Container className="mt-3">
      <Row>
        <Col lg={12}>
          <Card className="mt-5">
            <Card.Header as="h3">HomeWork By PlaToo</Card.Header>
            <Card.Body className="p-4">
              <Card.Title className="mb-3">
                Profile No. {ProfileID.id}
              </Card.Title>
              <div>
                <Row>
                  <Col lg={6} sm={12}>
                    <Image
                      src={ProfileID?.pathimage}
                      alt={ProfileID?.name}
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
                          <Form.Control
                            value={ProfileID?.name}
                            name="name"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col lg={6} sm={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="label__profile">
                            LastName :
                          </Form.Label>
                          <Form.Control
                            value={ProfileID?.lastname}
                            name="lastname"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col lg={6} sm={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="label__profile">
                            Age :
                          </Form.Label>
                          <Form.Select name="age">
                            <option value={ProfileID?.age}>
                              {ProfileID?.age}
                            </option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col lg={6} sm={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="label__profile">
                            Position :
                          </Form.Label>
                          <Form.Control
                            value={ProfileID?.position}
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
                            checked={ProfileID?.gender === "Male"}
                          />
                          <Form.Check
                            type="radio"
                            name="gender"
                            label="Female"
                            id="female"
                            checked={ProfileID.gender === "Female"}
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
