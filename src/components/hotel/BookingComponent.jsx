import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';



const BookingComponent = () => {
    return (<>
        <Row>
            <Col></Col>
            <Col><div className="px-5 py-5 m-3">
                <div className="card border-2">
                    <div className="row set-p justify-content-center">
                        <div className="m-5 p-4 mx-2 my-2" >
                            <Carousel>
                                <Carousel.Item>
                                <img className="image" src="https://i.imgur.com/zFRM6Ww.jpg" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="image" src="https://i.imgur.com/zFRM6Ww.jpg" />
                                </Carousel.Item>
                                <Carousel.Item>
                                <img className="image" src="https://i.imgur.com/zFRM6Ww.jpg" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="image" src="https://i.imgur.com/zFRM6Ww.jpg" />
                                </Carousel.Item>
                                <Carousel.Item>
                                <img className="image" src="https://i.imgur.com/zFRM6Ww.jpg" />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <span className="fa fa-angle-left" id="left"></span>
                        <span className="fa fa-angle-right" id="right"></span>
                        <div className="col-12">
                            <div className="row px-3 mt-4 mb-3">
                                <p className="rating mb-0 px-2 mr-3"><strong>8.0</strong></p>
                                <p className="text-primary mb-0 mr-2 grade"><strong>Very Good</strong></p>
                                <p className="text-secondary mb-0 mr-2">&middot;</p>
                                <p className="text-secondary mb-0">14,954 reviews</p>
                            </div>
                            <div className="row px-3">
                                <h3 className="font-weight-bold">Park Inn by Radisson Berlin Alexanderplatz</h3>
                            </div>
                            <div className="row px-3 mb-2 mt-2">
                                <span className="fa fa-star text-warning mr-1"></span>
                                <span className="fa fa-star text-warning mr-1"></span>
                                <span className="fa fa-star text-warning mr-1"></span>
                                <span className="fa fa-star text-warning mr-1"></span>
                            </div>
                            <div className="row px-3">
                                <h5 className="mb-1">1 bedroom &middot; 1 living &middot; 2 beds</h5>
                            </div>
                            <div className="row px-3">
                                <p className="mb-4">Mitte, Berlin &middot; 2.6 km from center</p>
                            </div>
                            <div className="line"></div>
                            <div className="row px-3 mt-4">
                                <h5 className="text-secondary mb-1">Sky Suite</h5>
                            </div>
                            <div className="row px-3 mb-4">
                                <h2 className="text-success mb-1 font-weight-bold">$288<span className="ml-2 text-muted text-sm">+&nbsp; $14 taxes and charges</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="mt-2 p-1 ">
                <button
                    className="btn btn-primary btn-block">BOOK</button>
            </div>
        </div>
        </Col>
            <Col></Col>
        </Row>


        

    </>
    )
}

export default BookingComponent