import React from "react";
import { Tab, Row, Col, ListGroup } from "react-bootstrap";
import ResultItem from "./ResultItem";
import Profile from "./Profile";

import { searchClientes } from "../apis/ClientesCRUD";

const ResultList = () => {
  
  const city = localStorage.getItem("city");
  searchClientes(city, (res)=>{
    console.log(res);
  });

  return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <br/>
      <Row>
        <Col sm={1}>
        </Col>
        
        <Col sm={5}>
          <ListGroup>
            <ListGroup.Item action href="#link1">
              <ResultItem />
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
              <ResultItem />
            </ListGroup.Item>
            <ListGroup.Item action href="#link3">
              <ResultItem />
            </ListGroup.Item>
            <ListGroup.Item action href="#link4">
              <ResultItem />
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col sm={5}>
          <Tab.Content>
            <Tab.Pane eventKey="#link1">
              <Profile />
            </Tab.Pane>
            <Tab.Pane eventKey="#link2">
              <Profile />
            </Tab.Pane>
            <Tab.Pane eventKey="#link3">
              <Profile />
            </Tab.Pane>
            <Tab.Pane eventKey="#link4">
              <Profile />
            </Tab.Pane>
          </Tab.Content>
        </Col>

        <Col sm={1}>
        </Col>

      </Row>
    </Tab.Container>
  );
};

export default ResultList;
