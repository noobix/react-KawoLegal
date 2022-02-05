import React from "react";
import {Link} from 'react-router-dom'

class Hompage extends React.Component {
    render() {
      return(<React.Fragment>
            <div className="jumbotron bgimage">
                <div className="container">
                  <h1 className="display-3">KAWOLEGAL</h1>
                  <p>A collaborative ecosystem for problem <br/>solvers and startups.</p>
                  <p><a className="btn btn-primary btn-lg" href="register.html" role="button">Register Now! &raquo;</a></p>
                </div>
            </div>
            <div className="container-fluid bgcolor">
              <footer>
                <div className="row">
                  <div className="col-lg-3">
                    <span>&copy; KAWOLEGAL 2017-2021</span>
                  </div>
                  <div className="col-lg-7"></div>
                  <div className="col-lg-2">
                    <a href="#" className="fa fa-facebook icons"></a>
                    <a href="#" className="fa fa-twitter icons"></a>
                    <a href="#" className="fa fa-linkedin icons"></a>
                    <a href="#" className="fa fa-instagram icons"></a>
                  </div>
                </div>
              </footer>
            </div>
      </React.Fragment>)
    }
  }
  export default Hompage