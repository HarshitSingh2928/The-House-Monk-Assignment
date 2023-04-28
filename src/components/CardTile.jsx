import React from 'react'
import Card from 'react-bootstrap/Card';
import {  faUser} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const CardTile = (props) => {
  return (
    <Card className="card-with-shadow">
            <Card.Body>
            <div className="card-header">
                <FontAwesomeIcon icon={faUser} />
              <div>
              <Card.Title style={{textAlign:"start",fontWeight:"normal"}}>{props.title}</Card.Title>
              <Card.Text className="card-text">
                {props.description}
              </Card.Text>
              </div>
             </div>
            </Card.Body>
          </Card>
  )
}

export default CardTile