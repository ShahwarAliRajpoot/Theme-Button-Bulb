import React from "react"
import Logo from "../Images/React.png"
import "./Style.css"

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light myNav">
  <a className="navbar-brand ml-4" href="#"><img src={Logo} width="120" /></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse w-75 myNav" id="navbarNav" >
    <ul className="navbar-nav font-weight-bold w-50 mx-auto justify-content-around my-ul" >
      <li className="nav-item ">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Pricing</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Header