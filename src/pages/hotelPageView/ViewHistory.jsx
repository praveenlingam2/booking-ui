import React from 'react'
import {  Col, Row } from 'react-bootstrap'
import FooterContainer from '../../components/common/FooterContainer'
import SimpleNavBar from '../../components/common/SimpleNavBar'

const ViewHistory = () => {
    return (
        <>
        <SimpleNavBar/>
        <Row>
            <Col></Col>
            <Col><div class="container mt-5 my-5 d-flex">

<div class="row">


    <div class="col-md-8 mx-auto">
        <p>Hotel Table</p>
        <table class="table bg-white rounded border">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Hotel Name</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>9898894003</td>
                    <td>Hotel</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>9898894309</td>
                    <td>Hotel</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>Bird</td>
                    <td>9898894309</td>
                    <td>Hotel</td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>9898894003</td>
                    <td>Hotel</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>Bird</td>
                    <td>9898894309</td>
                    <td>Hotel</td>
                </tr>
            </tbody>
        </table>

    </div>

    

</div>
</div> </Col>
            <Col></Col>

        </Row>
        <FooterContainer/>
      </> 
    )
}

export default ViewHistory