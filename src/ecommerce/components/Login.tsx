import React, {useState} from 'react'

const Login = () => {
    const [modal, setModal]=useState(false)
    const closeModal =() => setModal(false)
    return (
        <div>
            {/* <!-- Button trigger modal --> */}
            <button type="button" onClick={() => setModal(true)} className="btn btn-outline-dark ms-2 mx-auto" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i className="fa fa-sign-in me-2"></i>Login
            </button>

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