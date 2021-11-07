import './index.css';
import React from 'react';
import 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { Container, Row, Col } from 'react-bootstrap';

const Test = () => {
    
    return ( 
        <div className="test-content">
            <Container className = "bg-dark p-5">
                <Row>
                    <Col className='bg-primary'>
                        <div className="h1">Column Title</div>
                    </Col>
                    <Col className = 'bg-info h1'>column 2</Col>
                </Row>
            </Container>
        </div>
     );
}
 
export default Test;