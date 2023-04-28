import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardGrid = ({ data, searchText }) => {
    const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <Row xs={1} md={2} className="g-4">
      {/* {Array.from({ length: 10 }).map((_, idx) => ( */}
      {filteredData.map((item, idx) => (
        <Col key={idx}>
          <Card className="card-with-shadow">
            <Card.Body>
            <div className="card-header">
                <FontAwesomeIcon icon={faUser} />
              <div>
              <Card.Title style={{textAlign:"start",fontWeight:"normal"}}>{item.title}</Card.Title>
              <Card.Text className="card-text">
                {/* @handle, work at description bio to be wrap and not than 3 lines */}
                {item.text}
              </Card.Text>
              </div>
             </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default CardGrid