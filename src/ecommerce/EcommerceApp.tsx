import React from 'react'
import HomeEcommerce from './components/HomeEcommerce'
import Navbar from './components/Navbar/Navbar'

const EcommerceApp = () => {
  return (
    <div>
        {/* <div className="text-center">EcommerceApp</div> */}
        <Navbar />
        <HomeEcommerce />
    </div>
  )
}

export default EcommerceApp