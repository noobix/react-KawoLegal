import React from "react";
import {Link} from 'react-router-dom'

class Nav extends React.Component {
    render() {
        return(<div>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <a className="navbar-brand" href="#"><img src="images/lawyer-justice-symbol-law-firm-png-.jpg" alt="Logo" className="logo"/><strong>KAWOLEGAL</strong></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
  
              <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link border" href="#"><Link to="/">Home</Link><span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="startups.html"><Link to="/Startups">StartUps</Link></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="register.html"><Link to="/Register">Register</Link></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="login.html"><Link to="/Login">Login</Link></a>
                  </li>
                </ul>
              </div>
            </nav>
        </div>)
    }
}
export default Nav