import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import John3 from '../../assets/images/John3.png'; // Make sure to import your image
import Guy3 from '../../assets/images/Guy3.png'; // Make sure to import your image
import Joe3 from '../../assets/images/Joe3.png'; // Make sure to import your image
import Ryan3 from '../../assets/images/Ryan3.png'; // Make sure to import your image

const cardData = [
  {
    id: 1,
  
    image: Guy3,
  },
  {
    id: 2,
  
    image: John3,
  },
  {
    id: 3,
  
    image: Ryan3,
  },
  {
    id: 4,
  
    image: Joe3,
  },
];


export default function GridExample() {
  return (
    <Container>
      <h1>TESTIMONIALS</h1>
      <h2>See What Industry Influencers Are Saying...</h2>
    <Row xs={1} md={2} lg={4} className="g-4">
      {cardData.map((card) => (
        <Col key={card.id}>
          <Card>
            <Card.Img variant="top" src={card.image} />
            <Card.Body style={{backgroundColor:"black"}}>
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