import './index.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Test = () => {
    return ( 
        <div className="test-content">
            <Container>
                <Row>
                    <Col>column 1</Col>
                    <Col>column 2</Col>
                </Row>
            </Container>
        </div>
     );
}
 
export default Test;