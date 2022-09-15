import React from 'react'
import FooterContainer from '../../components/common/FooterContainer'
import SimpleNavBar from '../../components/common/SimpleNavBar'
import Alert from 'react-bootstrap/Alert';

const ProfilePage = () => {
    return (<>
    <SimpleNavBar/>
        <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
            <div className="card p-4">
                <div className=" image d-flex flex-column justify-content-center align-items-center">
                    <button className="btn btn-secondary"> <img src="https://i.imgur.com/wvxPV9S.png" height="100" width="100" /></button>
                    <span className="name mt-3">Name</span> <span className="idd">@eleanorpena</span>
                    <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                        <span className="idd1">Oxc4c16a645_b21a</span> <span><i className="fa fa-copy"></i></span> </div>
                    <div className=" d-flex mt-2"><Alert.Link href='/modify' ><button className="btn1 btn-dark">Edit Profile</button> </Alert.Link> </div>
                    <div className="text mt-3">
                        <p>Eleanor Pena is a creator of minimalistic x bold graphics and digital artwork.<br></br> Artist/ Creative Director by Day #NFT minting@ with FND night. </p>
                    </div>
                    <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
                        <span><i className="fa fa-twitter"></i></span> <span><i className="fa fa-facebook-f"></i></span>
                        <span><i className="fa fa-instagram"></i></span> <span><i className="fa fa-linkedin"></i></span> </div>
                    <div className=" px-2 rounded mt-4 date "> <span className="join">Joined May,2021</span> </div>
                </div>
            </div>
        </div>
        <FooterContainer/>
    </>
    )
}

export default ProfilePage