import React from 'react'
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const ConfirmCard = () => {
    return (
        <>
            <Row>
                <Col></Col>
                <Col>
                    <div className=''>
                        <Card style={{ width: '30rem' }}>
                            <Card.Body>
                                <Card.Text>
                                    <b>Booking Confirmed</b>
                                </Card.Text>

                            </Card.Body>
                            <Button variant="primary">Back To Home Page</Button>
                        </Card>
                    </div>
                </Col>
                <Col></Col>
            </Row>

        </>
    )
}

export default ConfirmCard