import React, { useState, useEffect, useMemo } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";

const HomeWorkOne: React.FC = () => {
  const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const words = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
  ];
  const [count, setCount] = useState<number>(Numbers[0]);
  const [selectCount, setSelectCount] = useState<number>(0);
  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCount(Number(event.target.value));
  };

  const numberWord = useMemo(() => {
    return words[count];
  }, [count]);

  useEffect(() => {
    setSelectCount(selectCount + 1);
  }, [count]);

  return (
    <Container>
      <Row>
        <Col lg={12}>
          <Card className="mt-3">
            <Card.Header as="h3">HomeWork By PlaToo</Card.Header>
            <Card.Body className="p-4">
              <Card.Title>HomeWork No. 1</Card.Title>
              <Form.Group className="mb-5">
                <Form.Select onChange={selectChange}>
                  {Numbers.map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Card.Title>HomeWork No.2</Card.Title>
              <Card.Text className="mb-5">
                Selected: <span className="selected__word">{numberWord}</span>
              </Card.Text>

              <Card.Title>HomeWork No.3</Card.Title>
              <Card.Text className="mb-5">
                Total Selected:{" "}
                <span className="selected__word">{selectCount}</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeWorkOne;
