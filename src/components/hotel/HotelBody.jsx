import React from 'react'


const HotelBody = () => {
    return (
        <div className="container text-center">
            <div>
                <div className="shadow-lg p-3 mb-3 bg-body rounded mt-3" >
                    <p className="h-dash">Your Dashboard</p>
                </div>
                <div className="shadow-lg p-3 mb-3 bg-body rounded mt-3" >
                    <p className="fst-italic textmuted">Private to you</p>
                    <div className="row mx-0 mt-2">
                        <div className="col-md-4 p-0 border-end">
                            <div className="viewbox">
                                <p className="blue">11</p>
                                <p>Who viewed your profile</p>
                            </div>

                        </div>
                        <div className="col-md-4 p-0 border-end">
                            <div className="viewbox">
                                <p className="blue">0</p>
                                <p>Article views</p>
                            </div>
                        </div>
                        <div className="col-md-4 p-0">
                            <div className="viewbox">
                                <p className="blue">1</p>
                                <p>Search apperance</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container mt-3">

                    <div class="row">


                        <div class="col-md-12 mx-auto rounded mt-3">
                            <table class="table bg-white rounded border">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col">Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>9898894003</td>
                                        <td>Date</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>9898894309</td>
                                        <td>Date</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>Bird</td>
                                        <td>9898894309</td>
                                        <td>Date</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>9898894003</td>
                                        <td>Date</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>Bird</td>
                                        <td>9898894309</td>
                                        <td>Date</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotelBody