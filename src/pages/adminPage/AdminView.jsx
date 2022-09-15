import React from 'react'
import AdminTable from '../../components/admin/AdminTable'
import CustomerNavBar from '../../components/login/CustomerNavBar'
import FooterContainer from '../../components/common/FooterContainer'

const AdminView = () => {
  return (
    <div>
      <CustomerNavBar/>
      <AdminTable/>
      <FooterContainer/>
    </div>
  )
}

export default AdminView