import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from './components/Header'

function App() {
  return (
    <>
    <Header/>
    <Container>
        <Row>
          <Col xs={6} md={4}></Col>
          <Col xs={6} md={4}>
            
          </Col>
          <Col xs={6} md={4}></Col>
        </Row>
        <Row>
          <Col>
            
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
