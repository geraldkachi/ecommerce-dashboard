import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar/Navbar'

const About = () => {
  return (
    <div>
        <Navbar />
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <h1 className="text-dark fw-bolder">About Us</h1>
                    <p className="lead mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi temporibus ducimus accusamus voluptas optio praesentium quaerat suscipit quo amet eaque, quisquam at saepe assumenda, tempore ab provident quia! Nam vel accusamus, commodi neque eaque autem, sequi voluptates eum tempore voluptas ad quod id doloremque inventore optio odit accusantium, suscipit aliquam.
                    </p>
                    <Link to="/contact" className="btn btn-outline-dark me-3 px-3">Contact Us</Link>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                    <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="image" height="400px" width="400pc" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About