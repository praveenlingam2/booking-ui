import React, { useState } from 'react';
import { useEffect } from 'react';
import { Alert, Button, Card, Row } from 'react-bootstrap'
import bookingApi from '../../api/Booking';
import FooterContainer from '../common/FooterContainer';
import CustomerNavBar from '../login/CustomerNavBar';

const HotelViewComponent = () => {
    const [rooms, setrooms] = useState({ location: "", roomName: "", image: "", hotelName: "" });

    const hotelAPI = (event) => {
        event.preventDefault();


        bookingApi
            .get(`/hotel/all`)
            .then((res) => {
                if (res.data.data) {
                    console.log(res.data);
                    setrooms(res.data.data);
                } else if (res.data.error) {
                    console.log(res.data.error.message);
                } else {
                    console.log("Something went wrong");
                }
            })
            .catch((error) => {
                console.log(`Error -> ${error}`);
            });
    }
    return (
        <div>
            <CustomerNavBar />
            <div className='mt-2 my-2'>
                <Row>
                    <div className='mt-4'>
                        <Card>
                            <Card.Img variant="top" className="w-25 h-50" src={require('../../Data/image/manali.jpg')} />
                            <Card.Body>
                                <>
                                    <Card.Title>Taj</Card.Title>
                                    <Card.Title>Single Room</Card.Title>
                                    <Card.Text>
                                        Location : Chennai
                                    </Card.Text>
                                </>

                                <Alert.Link href='/card'><Button variant="primary">Book</Button></Alert.Link>

                            </Card.Body>
                        </Card>
                    </div>
                </Row>
                <Row>
                    <div className='mt-4'>
                        <Card>
                            <Card.Img variant="top" className="w-25 h-50" src={require('../../Data/image/manali.jpg')} />
                            <Card.Body>
                                <>
                                    <Card.Title>Hilton</Card.Title>
                                    <Card.Title>Double  Room</Card.Title>
                                    <Card.Text>
                                        Location : Chennai
                                    </Card.Text>
                                </>

                                <Alert.Link href='/card'><Button variant="primary">Book</Button></Alert.Link>

                            </Card.Body>
                        </Card>
                    </div>
                </Row>
                <Row>
                    <div className='mt-4 mb-4'>
                        <Card>
                            <Card.Img variant="top" className="w-25 h-50" src={require('../../Data/image/manali.jpg')} />
                            <Card.Body>
                                <>
                                    <Card.Title>KuLuKuLu resort</Card.Title>
                                    <Card.Title>Single Room</Card.Title>
                                    <Card.Text>
                                        Location : Chennai
                                    </Card.Text>
                                </>

                                <Alert.Link href='/card'><Button variant="primary">Book</Button></Alert.Link>

                            </Card.Body>
                        </Card>
                    </div>
                </Row>

                <FooterContainer />
            </div>
        </div >
    )
}

export default HotelViewComponent