import React, { useState } from 'react'
import Modal, { Button } from './Modal/Modal'

const Login = () => {
    const [modal, setModal] = useState(false)
    // const closeModal =() => setModal(false)
    return (
        <div>
            {/* <!-- Button trigger modal --> */}
            <Button type="button" onClick={() => setModal(true)} className="btn btn-outline-dark ms-2 mx-auto" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <i className="fa fa-sign-in me-2"></i>Login
            </Button>
            <>
                {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Button onClick={() => setModal(true)}>Open Modal</Button>
            </div> */}
                <Modal show={modal} onClose={() => setModal(false)}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Modal title</h5>
                                <button onClick={() => setModal(false)} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" >Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </Modal>
            </>

            {/* <!-- Modal --> */}

            {modal ? <div className="modal fade bg-danger" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label">Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-outline-dark w-100">Submit</button>
                        </form>
                    </div>
                </div>
            </div> : <></>}
        </div>
    )
}

export default Login