import React, { Component } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

class CreateAlias extends Component {
  render() {
    return (
      <Container className="flexbox-max-height-center">
        <Row className="flexbox-max-height-center px-sm-auto px-5">
          <Col md="3"></Col>
          <Col md="6">
            <h1 className="text-center">react-messaging</h1>
            <p className="text-center mb-5">A messenger built on Firebase and React.js</p>
            <Form>
              <Row>
                <Col className="pr-lg-1" lg="9" md="12">
                  <Form.Control placeholder="Username" />
                </Col>
                <Col className="pl-lg-1 pt-lg-0 pt-2" lg="3" md="12">
                  <Button className="extend-width" variant="primary" type="submit">
                    Submit
              </Button>
                </Col>
              </Row>
            </Form>
         </Col>
          <Col md="3"></Col>
        </Row>
      </Container>
    );
  }
}

export default CreateAlias;
