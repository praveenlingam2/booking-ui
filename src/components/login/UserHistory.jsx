import React from 'react'
import FooterContainer from '../common/FooterContainer'
import SimpleNavBar from '../common/SimpleNavBar'

const UserHistory = () => {
    return (
        <>
        <SimpleNavBar/>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Hotel Name</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Doc Samuktha </td>
                            <td>12 OCT 2022</td>
                            <td>Booked</td>

                            <td>
                                <label className="badge text-bg-success">Completed</label>
                            </td>
                        </tr>
                        <tr>
                            <td>Doc John</td>
                            <td>28 OCT 2022</td>
                            <td>Booked</td>

                            <td>
                                <label className="badge text-bg-warning">Processed</label>
                            </td>
                        </tr>
                        <tr>
                            <td>Doc John</td>
                            <td>28 OCT 2022</td>
                            <td>Booked</td>

                            <td>
                                <label className="badge text-bg-warning">processing</label>
                            </td>
                        </tr>
                        <tr>
                            <td>Doc John</td>
                            <td>28 OCT 2022</td>
                            <td>Booked</td>
                            <td>
                                <label className="badge text-bg-warning">Upcoming</label>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <FooterContainer/>
        </>
    )
}

export default UserHistory