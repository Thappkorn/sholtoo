import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Table,
  Image,
  Button,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { DATAPETS } from "../models/dataPet";
import { useNavigate } from "react-router-dom";

interface typePet {
  id: number;
  name: string;
  pettype: string;
  pathimage: string;
}

const HomeWorkTwo: React.FC = () => {
  const navigate = useNavigate();
  const [Pets, setPets] = useState<typePet[]>(DATAPETS);

  const viewClick = (pet: typePet) => {
    navigate("/profile", { state: pet });
  };

  return (
    <Container>
      <Row>
        <Col lg={12}>
          <Card className="mt-5">
            <Card.Header as="h3">HomeWork By PlaToo</Card.Header>
            <Card.Body className="p-4">
              <Card.Title className="mb-3">HomeWork No. 1</Card.Title>
              <Table responsive="md">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>PetType</th>
                    <th>Image</th>
                    <th>View</th>
                  </tr>
                </thead>
                <tbody>
                  {Pets.map((data) => (
                    <tr key={data.id}>
                      <td className="text__table">{data.id}</td>
                      <td className="text__table">{data.name}</td>
                      <td className="text__table">
                        <Image
                          src={data.pathimage}
                          alt={data.name}
                          roundedCircle
                          className="image__profile"
                        />
                      </td>
                      <td className="text__table">{data.pettype}</td>
                      <td>
                        <Button
                          variant="outline-info"
                          onClick={() => viewClick(data)}
                        >
                          <FontAwesomeIcon icon={faEye} /> View
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default HomeWorkTwo;
