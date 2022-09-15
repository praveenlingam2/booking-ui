import React from 'react'

import AuthComponent from '../components/admin/AuthComponent';
import LoginComponent from '../components/wrapper/LoginComponent';

const LoginPage = () => {

  return (
    <div>
      <AuthComponent >
        <LoginComponent />
      </AuthComponent>
    </div >
  )
};

export default LoginPage