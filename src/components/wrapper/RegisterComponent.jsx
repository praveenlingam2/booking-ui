import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import bookingApi from '../../api/Booking';

const RegisterComponent = () => {
    const navigate = useNavigate();
    const [register, setRegister] = useState({ userName: "", password: "", emailId: "", phoneNumber: "", });
    const [registerError, setRegisterError] = useState({
        userName: "", password: "", emailId: "", phoneNumber: "",
    })

    const registerAPI = (event) => {
        event.preventDefault();

        bookingApi
            .post("/auth/register", register)
            .then((response) => {
                let data = response.data;
                if (data.data) {
                    navigate("/login");
                } else {
                    console.log(data.error.message);
                }
            })
            .catch((err) => console.log(err));
    };
    return (


        <div className="card m-0">
            <div className="text-center intro">
                <img src="https://i.imgur.com/uNiv4bD.png" width="160" />
            </div>
            <Container >
                <Row className='g-2 '>

                    <Col> <div className="mt-4 text-center">

                        <h4 >Create New Account.</h4>
                        <span>Register with your admin credentials</span>
                        <input
                            type="text"
                            className="form-control mt-2"
                            placeholder="User Name"
                            value={register.userName}
                            onChange={(event) => {
                                let userName = event.target.value;
                                if (userName.length > 2) {
                                    setRegisterError({ ...registerError, UserName: "" });
                                } else {
                                    setRegisterError({
                                        ...registerError,
                                        UserName: "Enter valid name",
                                    });
                                }
                                setRegister({ ...register, userName: userName });
                            }}
                        /><label className="form-text text-danger">
                        {registerError.userName}
                      </label>
                        <input type="text"
                            className="form-control mt-2"
                            placeholder="Email"
                            value={register.emailId}
                            onChange={(event) => {
                                let emailId = event.target.value;
                                if (emailId.length > 2) {
                                    setRegisterError({ ...registerError, emailId: "" });
                                } else {
                                    setRegisterError({
                                        ...registerError,
                                        emailId: "Enter valid Email",
                                    });
                                }
                                setRegister({ ...register, emailId: emailId });
                            }} />
                        <label className="form-text text-danger">
                            {registerError.emailId}
                        </label>
                        <input type="text"
                            className="form-control mt-2"
                            placeholder="Phone Number"
                            value={register.phoneNumber}
                            onChange={(event) => {
                                let phoneNumber = event.target.value;
                                if (phoneNumber.length > 2) {
                                    setRegisterError({ ...registerError, phoneNumber: "" });
                                } else {
                                    setRegisterError({
                                        ...registerError,
                                        phoneNumber: "Enter valid name",
                                    });
                                }
                                setRegister({ ...register, phoneNumber: phoneNumber });
                            }}
                        />
                        <label className="form-text text-danger">
                            {registerError.phoneNumber}
                        </label>
                        <div className="inputbox">
                            <input type="text"
                                className="form-control mt-2"
                                placeholder="Password"
                                value={register.password}
                                onChange={(event) => {
                                    let password = event.target.value;
                                    if (password.length > 2) {
                                        setRegisterError({ ...registerError, password: "" });
                                    } else {
                                        setRegisterError({
                                            ...registerError,
                                            password: "Enter valid Password",
                                        });
                                    }
                                    setRegister({ ...register, password: password });
                                }}
                            />
                            <label className="form-text text-danger">
                                {registerError.password}
                            </label>
                            <i className="fa fa-lock"></i>
                        </div>
                        <div className="mt-2">
                            <button
                                className="btn btn-primary btn-block my-2"
                                onClick={(e) => registerAPI(e)}
                                disable={
                                    register.userName===""||
                                    register.emailId===""||
                                    register.phoneNumber===""||
                                    register.password===""||

                                    register.emailId.length<3||
                                    register.userName.length<3||
                                    register.phoneNumber.length<3||
                                    register.password.length<3
                                }
                                >Register</button>
                        </div>
                    </div>
                    </Col>

                </Row>
            </Container>

        </div>


    )
}

export default RegisterComponent