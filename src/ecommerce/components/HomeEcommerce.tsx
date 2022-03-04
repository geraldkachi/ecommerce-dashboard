import React from 'react'
import Products from './Products'

const HomeEcommerce = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white">
        <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" className="card-img" alt="backgroumd" height="550px" width="100x" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h3 className="card-title display-3 fw-bolder mb-0">
              NEW SEASON ARRIVALS
            </h3>
            <p className="card-text lead fs-2">CHECK OUT ALL THE TREAD</p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  )
}

export default HomeEcommerce