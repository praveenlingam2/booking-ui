import React, { useState } from 'react'
import { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import bookingApi from '../../api/Booking'
import FooterContainer from '../../components/common/FooterContainer'
import SimpleNavBar from '../../components/common/SimpleNavBar'


const AddHotel = () => {
  const [Hotel, setHotel] = useState({
    roomName: "",
    location: "",
    image: "",
    hotelName: "",
  })
  const HotelApi =(event)=>{
    event.preventDefault();
    bookingApi
    .post("/hotel",Hotel)
    .then((response)=>{
      console.log(response);
      let data= response.data;
      
    })
  } 
  useEffect(() => {
    console.log(Hotel);
  }, [Hotel]);
  return (

    <>
      <SimpleNavBar />
      <Row>
        <Col></Col>
        <Col>
          <div className='addHotel mt-5 my-5'>
            <div className="wrapper border">
              <div className="alert alert-dismissible fade show" role="alert">
                <div className="h2 font-weight-bold text-center mt-3"> Room added</div>
                <div id="boxes">
                  <div className="box">
                    <div className="row">
                      <div className="col-sm-4  w-50">
                        <img src="https://images.pexels.com/photos/5998132/pexels-photo-5998132.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                          alt="" />
                      </div>
                      <div className="col-sm-8 mt-2">
                        <div >
                          <div className="text-muted pl-1">Hotel Name</div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Room Type"
                            value={Hotel.hotelName}
                            onChange={(event) => {
                              setHotel({ ...Hotel, hotelName: event.target.value });
                            }}
                          />
                        </div>

                        <div >
                          <div className="text-muted pl-1">Room Name</div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Room Type"
                            value={Hotel.roomName}
                            onChange={(event) => {
                              setHotel({ ...Hotel, roomName: event.target.value });
                            }}
                          />
                        </div>
                        <div >
                          <div className="text-muted pl-1">Location</div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Room Type"
                            value={Hotel.location}
                            onChange={(event) => {
                              setHotel({ ...Hotel, location: event.target.value });
                            }}
                          />
                        </div>
                        <div className="mt-4 text-right">
                          <button
                            className="btn btn-primary text-center"
                            type="button"
                            onClick={(event)=> {
                              
                            }}
                            >save</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div></Col>
        <Col></Col>
      </Row>
      <FooterContainer />
    </>
  )
}

export default AddHotel