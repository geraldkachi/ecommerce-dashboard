import React from 'react'
import Navbar from './Navbar/Navbar'

const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className="container ">
                <div className="row">
                    <div className="col-12 text-center my-4 py-4">
                        <h1>Have Some Questions ?</h1>
                        <hr />
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-5 mb-5">
                        <img height="300px" width="300px" src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" alt="conatct" />
                    </div>
                    <div className="col-md-6">
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="full name" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Example textarea</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1"></textarea>
                            </div>

                            <button className="btn btn-outline-dark">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact