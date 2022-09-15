import React from 'react'
import FooterContainer from '../components/common/FooterContainer'
import LoginBodyComponent from '../components/login/LoginBodyComponent'
import CustomerNavBar from '../components/login/CustomerNavBar'

const CustomerViewPage = () => {
  return (
    <div>
        <CustomerNavBar/>
        <LoginBodyComponent/>
        <FooterContainer/>
    </div>
  )
}

export default CustomerViewPage