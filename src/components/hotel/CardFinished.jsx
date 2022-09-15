import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const CardFinished = () => {
    return (
        <div>
            <Row>
                <Col></Col>
                <Col>
                    <Row></Row>
                    <Row> <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Booking Confirmed</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                            <Card.Text>
                                ThakYou for Book Rooms
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Row>
                    <Row></Row>
                </Col>
                <Col></Col>
            </Row>
        </div >
    )
}

export default CardFinished