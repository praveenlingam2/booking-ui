import React from 'react'

import AuthComponent from '../components/admin/AuthComponent';
import RegisterComponent from '../components/wrapper/RegisterComponent';



const RegisterPage = () => {
  return (
    <>

      <AuthComponent>
        <RegisterComponent />
      </AuthComponent>

    </>
  )
};
export default RegisterPage