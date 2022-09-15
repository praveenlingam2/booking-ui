import React from 'react'

import BodyContainer from '../components/login/BodyContainer';
import NavbarContainer from '../components/common/NavbarContainer';
import FooterContainer from '../components/common/FooterContainer';


const HomePage = () => {
    return (
        <div>
            <NavbarContainer/>
            <BodyContainer/>
            <FooterContainer/>
        </div>

    )
}

export default HomePage