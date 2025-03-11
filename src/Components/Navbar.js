import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import './style.css'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><img src='./android-chrome-192.png' alt='Logo' style={{ width: '45px', height: '45px', marginRight: '5px', marginTop: '-5px' }} /></Link>
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.about}</Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
          <div className="d-flex">
            <div className="rounded-circle mx-2" onClick={props.purpleMode} style={{ height: '25px', width: '25px', cursor: 'pointer', backgroundColor: '#780C28', border: '1px solid white' }}></div>
            <div className="rounded-circle mx-2" onClick={props.maroonMode} style={{ height: '25px', width: '25px', cursor: 'pointer', backgroundColor: '#441752', border: '1px solid white' }}></div>
          </div>
          <div className="toggle-switch mx-2">
            <label className="switch-label">
              <input type="checkbox" className="checkbox" onClick={() => { props.toggleMode(null) }}/>
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string
}

Navbar.defaultProps = {
  title: 'Set Title',
  about: 'Set About'
}