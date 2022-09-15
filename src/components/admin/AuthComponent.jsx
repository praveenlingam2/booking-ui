import React from "react";

import FooterContainer from '../common/FooterContainer';
import SimpleNavBar from '../common/SimpleNavBar'

const AuthComponent = ({ children }) => {
  return (
    <>
      <SimpleNavBar />
      <div className="container">
        <div className="row m-5">
          <div className="col-3"></div>
          <div className="col-6 card border p-3 bg-light">{children}</div>
          <div className="col-3"></div>
        </div>

      </div>
      <FooterContainer />
    </>
  );
};

export default AuthComponent;
