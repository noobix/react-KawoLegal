import React from "react";

class Login extends React.Component {
    render() {
        return(<div>
            <div className="container form-con">
            <div className="row">
                <div className="col-lg-12">
                <p><h4>Already a member? Login to add your Startup</h4></p>
                <form>
                    <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <button type="submit" className="btn btn-primary">SignIn</button>
                </form>
                </div>
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
        </div>)
    }
}
export default Login