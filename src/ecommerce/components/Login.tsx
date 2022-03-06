import React, {useState} from 'react'
import Modal, { Button } from './Modal/Modal'

const Login = () => {
    const [modal, setModal]=useState(false)
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
                <div className="content">
                    <img src="https://cdn.pixabay.com/photo/2015/01/09/11/11/office-594132__340.jpg" alt="Developer" />
                    <div className="text">
                        <h2>John Doe</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aliquid placeat omnis
                            adipisci dolores quae amet mollitia sint, temporibus eum magnam facilis odio ex incidunt?
                            Deleniti quam et rem obcaecati. Laborum atque odit expedita nulla.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita labore laborum, assumenda
                            dolorum provident quod itaque earum, officia in placeat dignissimos nostrum? Totam corrupti
                            nihil repudiandae ducimus atque quod eos!
                        </p>
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