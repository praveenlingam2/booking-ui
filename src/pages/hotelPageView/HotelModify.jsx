import React from 'react'
import Nav from 'react-bootstrap/Nav';
import FooterContainer from '../../components/common/FooterContainer';
import Button from 'react-bootstrap/Button';
import SimpleNavBar from '../../components/common/SimpleNavBar';
import { Col, Row } from 'react-bootstrap'


const HotelModify = () => {
    return (
        <>
        <SimpleNavBar/>
        <Row>
            <Col></Col>
            <Col> <div class="h-screen py-4 ">
                <div class="bg-white">
                    <h4 class="flex justify-center p-3 text-[22px]">Edit Hotel Profiles</h4>
                    <div class="md:grid grid-cols-12 flex flex-col md:items-center gap-4 p-4">
                        <div class="col-span-6 relative">
                            <span class="absolute bg-white left-3 -top-[12px] px-2">Hotel Name</span>
                            <input type="text" class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
                        </div>

                        <div class="col-span-6 relative">
                            <span class="absolute bg-white left-3 -top-[12px] px-2">Facebook</span>
                            <input type="text" class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
                        </div>

                        <div class="col-span-6 relative">
                            <span class="absolute bg-white left-3 -top-[12px] px-2">Linkedin</span>
                            <input type="text" class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
                        </div>

                        <div class="col-span-6 relative">
                            <span class="absolute bg-white left-3 -top-[12px] px-2">Website</span>
                            <input type="text" class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
                        </div>



                        <div class="col-span-6 relative">
                            <span class="absolute bg-white left-3 -top-[12px] px-2">Twitter</span>
                            <input type="text" class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
                        </div>

                        <div class="col-span-6 relative">
                            <span class="absolute bg-white left-3 -top-[12px] px-2">Hotel Discription</span>
                            <input type="text" class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
                        </div>



                    </div>

                    <div class="px-4 text-right py-5">
                        <Button variant="primary">Save</Button>
                        <Nav.Link href=''><Button variant="primary mt-2">Delete</Button></Nav.Link>
                    </div>
                
                </div>
            </div>
            </Col>
            <Col></Col>
        </Row>
        <Nav.Link href='/hotelPage'><Button className='my-2 m-2' variant="primary">Back</Button></Nav.Link>
        <FooterContainer />
        </>
    )
}

export default HotelModify