import React from 'react'
import Header from '../common/Header/header'
import Footer from '../common/Footer/footer'

const pageLayput = ({ children }) => {
    return (
        <React.Fragment>
            <Header></Header>
            {children}
            <Footer></Footer>
        </React.Fragment>
    )
}

export default pageLayput