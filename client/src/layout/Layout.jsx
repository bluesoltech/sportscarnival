import React from 'react'
import Navbar from '../component/Navbar'
import Routers from '../routes/Routers'
import Footer from '../component/Footer'

const Layout = () => {
    return (
        <div>
            <Navbar />
            <main>
                <Routers />
            </main>
            <Footer />
        </div>
    )
}

export default Layout