import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import CardTile from './CardTile';
const CardGrid = ({ data, searchText }) => {
    const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <Row xs={1} md={2} className="g-4">
      {filteredData.map((item, idx) => (
        <Col key={idx}>
            <Link to={'/item/'+item.id} style={{ textDecoration: 'none', color:"black"}}>
          <CardTile title={item.title} description= {"@user"+item.id+", "+item.text}/>
          </Link>
        </Col>
      ))}
    </Row>
  )
}

export default CardGrid