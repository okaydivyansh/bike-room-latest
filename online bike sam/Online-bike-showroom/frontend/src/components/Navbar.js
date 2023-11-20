import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Badge from 'react-bootstrap/Badge';
import Modal from "../Modal";
import Cart from "../screens/Cart";
import { useCart } from "./contextReducer";

const NavigationBar = () => {
  const [cartView, setCartView] = useState(false);
  let data = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ background: 'linear-gradient(to right, #5a8d68, #2e604e)', fontFamily: 'Times New Roman, serif', color: 'white', fontWeight: 'bold', fontSize: '2em' }}>
        <div className="container-fluid">
          <Link className="navbar-brand fs-4 fst-italic" to="/">
            Bike Room
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
              </li>
              {(localStorage.getItem("authToken")) ?
                <li className="nav-item">
                  <Link className="nav-link active fs-5" aria-current="page" to="/myOrder">My Orders</Link>
                </li>
                : ""}
              <li className="nav-item">
                <Link className="nav-link active fs-5" aria-current="page" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active fs-5" aria-current="page" to="/about">About</Link>
              </li>
            </ul>
            {!localStorage.getItem("authToken") ?
              <div className='d-flex'>
                <Link className="btn text-success mx-1" to="/login">Login</Link>
                <Link className="btn text-success mx-1" to="/CreateUser">SignUp</Link>
              </div>
              :
              <div>
                <div className="btn mx-2" onClick={() => { setCartView(true) }}>
                  My Cart {" "}
                  <Badge pill bg="danger">{data.length}</Badge>
                </div>
                {cartView ? <Modal onClose={() => setCartView(false)}><Cart /></Modal> : null}
                <div className="btn text-danger mx-2" onClick={handleLogout}>Logout</div>
              </div>
            }
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavigationBar;