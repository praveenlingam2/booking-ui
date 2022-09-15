import React from 'react'
import FooterContainer from '../../components/common/FooterContainer';
import HotelBody from '../../components/hotel/HotelBody';
import HotelNavBar from '../../components/common/HotelNavBar';


const HotelPage = () => {
  return (
    <div>
    <HotelNavBar/>
    <HotelBody/>
    <FooterContainer/>
    </div>
  )
}

export default HotelPage