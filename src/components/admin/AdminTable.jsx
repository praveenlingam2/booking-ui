import React from 'react'
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';


const AdminTable = () => {
    return (

        <div class="container mt-5">

            <div class="row">


                <div class="col-md-8 mx-auto">
                    <p>Hotel Table</p>
                    <Alert.Link href='/addhotel'><Button variant="primary">Add Hotel</Button></Alert.Link>
                    <Alert.Link href=''  className='mx-2'><Button variant="primary">Delete</Button></Alert.Link>
                    <Alert.Link href=''><Button variant="primary">Edit</Button></Alert.Link>
                    <table class="table bg-white rounded border mt-2">
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

                <div class="col-md-8 mx-auto">
                    <p>User Table</p>
                    <Alert.Link href='/search'><Button variant="primary">Add User</Button></Alert.Link>
                    <Alert.Link href='' className='mx-2'><Button variant="primary">Delete</Button></Alert.Link>
                    <Alert.Link href=''><Button variant="primary">Edit</Button></Alert.Link>
                    <table class="table bg-white rounded border mt-2">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Gender</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>9898894003</td>
                                <td>Male</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>9898894309</td>
                                <td>Male</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>Bird</td>
                                <td>9898894309</td>
                                <td>Male</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>9898894003</td>
                                <td>Male</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>Bird</td>
                                <td>9898894309</td>
                                <td>Male</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default AdminTable