import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import John from '../../assets/images/John.png'; // Make sure to import your image
import Guy from '../../assets/images/Guy.png'; // Make sure to import your image
import Joe from '../../assets/images/Joe.png'; // Make sure to import your image
import Ryan from '../../assets/images/Ryan.png'; // Make sure to import your image

const cardData = [
  {
    id: 1,
  
    image: Guy,
  },
  {
    id: 2,
  
    image: John,
  },
  {
    id: 3,
  
    image: Ryan,
  },
  {
    id: 4,
  
    image: Joe,
  },
];


export default function GridExample() {
  return (
    <Container>
    <Row xs={1} md={2} lg={2} className="g-4">
      {cardData.map((card) => (
        <Col key={card.id}>
          <Card>
            <Card.Img variant="top" src={card.image} />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.text}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </Container>
  );
}