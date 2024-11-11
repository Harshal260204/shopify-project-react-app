import React from 'react'
import '../Styles/Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary-emphasis">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand sitename fw-bold" href="#">Shopify</Link>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

      <form className="d-flex " role="search">
        <input className="form-control border border-primary border-3 rounded-0 search-bar"  type="search" placeholder="Search For A Product" aria-label="Search" />
        <button className="btn btn-primary text-white rounded-0 me-5" type="submit">Search</button>
      </form>

        <li className="nav-item fw-bold ms-4 fs-5 ">
          <Link to="/Products" className="nav-link active" aria-current="page" href="#">Products</Link>
        </li>

        <li className="nav-item fw-bold ms-4 fs-5">
          <Link to="/Categories" className="nav-link" href="#">Categories</Link>
        </li>

        <li className="nav-item fw-bold ms-4 fs-5">
          <Link to='/ProductDetail' className="nav-link" href="#">Products 3</Link>
        </li>

        <li className="nav-item fw-bold ms-4 fs-5">
          <Link to='/Cart' className="nav-link" href="#">Cart</Link>
        </li>

        <li className="nav-item fw-bold ms-4 fs-5">
          <a className="nav-link" href="#">Login</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

  )
}
