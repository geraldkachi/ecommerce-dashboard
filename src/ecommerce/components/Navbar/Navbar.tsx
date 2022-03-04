import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './nav.css'

const Navbar = () => {
	const state = useSelector((state: any) => state.handleCart())

	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
				<div className="container">
					<NavLink to='/' className="navbar-brand fw-bold f-4" >LA Collection</NavLink>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mx-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<NavLink to="/" className="nav-link active" aria-current="page">
									Home
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/products" className="nav-link">
									Product
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/about" className="nav-link">
									About
								</NavLink>
							</li>	
							<li className="nav-item">
								<NavLink to="/contact" className="nav-link">
									Contact
								</NavLink>
							</li>													
						</ul>
						<div className="d-flex buttons">
							<NavLink to="/login" className="btn btn-outline-dark ms-2">
								<i className="fa fa-sign-in">Login</i>
							</NavLink>
							<NavLink to="/register" className="btn btn-outline-dark ms-2">
								<i className="fa fa-sign-in">Register</i>
							</NavLink>
							<NavLink to="/cart" className="btn btn-outline-dark ms-2">
								<i className="fa fa-sign-in">Cart({state.length})</i> 
							</NavLink>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
