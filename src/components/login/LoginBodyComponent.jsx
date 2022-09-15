import React from 'react'
import { Alert, Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BodyContainer from './BodyContainer'

const LoginBodyComponent = () => {
    return (
        <div className='mt-3 '>
            <Row>
                <Col>
                    <div className="inputbox mx-5 d-flex ">
                        <input type="text"
                            className="form-control mt-2"
                            placeholder="Place"
                        />
                    </div></Col>
                <Col>
                    <div className="inputbox mx-5 d-flex">
                        <input type="date"
                            className="form-control mt-2"
                            placeholder="Enter date"
                        />
                    </div></Col>
                <Col>
                    <div className="mx-5 mt-2 d-flex ">
                    <Alert.Link href='/hotelList'><Button variant="light">Search</Button></Alert.Link>
                    </div></Col>
            </Row>
            <BodyContainer />
        </div>
    )
}

export default LoginBodyComponent