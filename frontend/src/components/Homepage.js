import React, { useContext } from 'react';
import { UserContext } from '../App';
import { Card, Container, Row, Col } from 'react-bootstrap';

function Homepage() {
  const { currentUser } = useContext(UserContext);

  return (
    <Container className="d-flex flex-column align-items-center" style={{ marginTop: '10rem' }}>
      <Row className="d-flex justify-content-center align-items-center">
        <Col xs={8} md={12}>
          {currentUser ? (
            <Card style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', padding: '1rem' }}>
              <Card.Title>
                <h2>Welcome, {currentUser.username}!</h2>
              </Card.Title>
              <Card.Body>
                <h3> Please use our navigation bar to browse. </h3>
                <h3>100% fake jobs. 0% real dissapointment. </h3>
              </Card.Body>
            </Card>
          ) : (
            <Card style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', padding: '1rem' }}>
              <h2>Please create an account or log in to access more features.</h2>
            </Card>
          )}
        </Col>
      </Row>
    </Container >
  );
}

export default Homepage;

