import React, { useState, useEffect } from "react";
import { Tab, Row, Col, ListGroup } from "react-bootstrap";
import ResultItem from "./ResultItem";
import Profile from "./Profile";

import { searchClientes } from "../apis/ClientesCRUD";

const ResultList = (props) => {
  //const city = localStorage.getItem("city");
  const [clientes, setClientes] = useState([]);
  
  useEffect(()=>{
    searchClientes(props.city, setClientes);
  }, []);

  return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#0">
      <br/>
      <Row>
        <Col sm={1}>
        </Col>
        
        <Col sm={5}>
          <ListGroup>
            {clientes.map((cliente, index) => (
              <ListGroup.Item action href={"#"+index}>
                <ResultItem data={cliente} />
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>

        <Col sm={5}>
          <Tab.Content>
            {clientes.map((cliente, index) => (
              <Tab.Pane eventKey={"#"+index}>
                <Profile data={cliente} />
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Col>

        <Col sm={1}>
        </Col>

      </Row>
    </Tab.Container>
  );
};

export default ResultList;
