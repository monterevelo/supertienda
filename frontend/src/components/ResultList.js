import React, { useState, useEffect } from "react";
import { Tab, Row, Col, ListGroup } from "react-bootstrap";
import ResultItem from "./ResultItem";
import Profile from "./Profile";

import { searchClientes } from "../apis/crud";

const ResultList = (props) => {
  const [searchResults, setSearchResults] = useState([]);
  
  useEffect(()=>{
    searchClientes(props.city, setSearchResults);
    console.log(searchResults);
  }, []);

  return (
    <Tab.Container id="list-group-tabs-example" /* defaultActiveKey="#0" - (Esto es opcional)*/ >  
      <br/>
      <Row>
        <Col sm={1} />
        
        <Col sm={5}>
          <ListGroup>
            {searchResults.map((result, index) => (
              <ListGroup.Item action href={"#"+index}>
                <ResultItem clienteData={result} />
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>

        <Col sm={5}>
          <Tab.Content>
            {searchResults.map((result, index) => (
              <Tab.Pane eventKey={"#"+index}>
                <Profile clienteData={result} />
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Col>

        <Col sm={1} />

      </Row>
    </Tab.Container>
  );
};

export default ResultList;
