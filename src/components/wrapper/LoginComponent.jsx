import React, { useContext, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import bookingApi from '../../api/Booking';
import { UserContext } from '../../context/UserContext';

const LoginComponent = () => {
  const navigate = useNavigate();
  const { setLoggedInUser, loginUser } = useContext(UserContext);
  const [login, setLogin] = useState({ name: "", password: "" });
  const [loginError, setLoginError] = useState({ userName: "", password: "" })

  const loginAPI = (event) => {
    event.preventDefault();

    bookingApi
      .post(`/auth/login`, login)
      .then((response) => {
        console.log(response);
        let data = response.data
        if (data.data) {
          console.log(data.data);
          setLoggedInUser({
            id: data.data.id,
            userName: data.data.userName,
            password: data.data.password,
            role: data.data.role,
            isLoggedIn: true,
          });
          if (data.data.role === "ADMIN") { navigate("/admin"); }
          else navigate("/customerPage")
        } else {
          console.log(data.error.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>

      <div className="card">
        <div className="text-center intro">
          <img src="https://i.imgur.com/uNiv4bD.png" width="160" />
          <span className="d-block account">Don't have account yet?</span>
          <span className="contact">Contact us at <a href="" className="mail">booking.com@gmail.com</a> and <br /> we will take care of everything</span>
        </div>


        <Container >
          <Row className='g-2'>

            <Col> <div className="mt-4 text-center">

              <h4 >Log In.</h4>
              <span>Login with your admin credentials</span>
              <input
                type="text"
                className="form-control mt-2 "
                name=""
                placeholder="UserName"
                value={login.userName}
                onChange={(event) => {
                  let userName = event.target.value;
                  if (userName.length > 2) {
                    setLoginError({ ...loginError, userName: "" });
                  }
                  else {
                    setLoginError({ ...loginError, userName: "Enter valid userName", });
                  }
                  setLogin({ ...login, userName: userName });
                }}
              />
            </div>
              <label className="form-text text-danger">
                {loginError.userName}
              </label>


              <div className="inputbox">
                <input type="Password"
                  className="form-control mt-2"
                  placeholder="Password"
                  value={login.password}
                  onChange={(event) => {
                    let password = event.target.value;
                    if (password.length > 2) {
                      setLogin({ ...login, password: event.target.value });
                    } else {
                      setLoginError({ ...loginError, password: "invalid password", });
                    }
                    setLogin({ ...login, password: password });
                  }}
                />
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <a href="#" className="forgot">Forgot Password?</a>
                </div>
              </div>
              <div className="mt-2 p-1 ">
                <button
                  className="btn btn-primary btn-block"
                  onClick={(event) => loginAPI(event)}
                >Log In</button>
              </div>
            </Col>

          </Row>
        </Container>
      </div>
    </>
  )
}

export default LoginComponent;