import React from "react";

class Register extends React.Component {
    render() {
        return(<React.Fragment>
            <div class="container form-con">
                <div class="row">
                    <div class="col-lg-12">
                    <p><h4>Join KawoLegal. Signup to get your startup listed now! </h4></p>
                    <div class="form-group">
                        <label for="Fullname">Full Name</label>
                        <input type="fullname" class="form-control" id="Fullname" aria-describedby="fullnameHelp"/>
                        <small id="fullnameHelp" class="form-text text-muted">We'll never disclose personal information</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Confirm Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword2"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Sign UP</button>
                    </div>
                    
                </div>
            </div>
            <div class="container-fluid bgcolor">
                <footer>
                    <div class="row">
                    <div class="col-lg-3">
                        <span>&copy; KAWOLEGAL 2017-2021</span>
                    </div>
                    <div class="col-lg-7"></div>
                    <div class="col-lg-2">
                        <a href="#" class="fa fa-facebook icons"></a>
                        <a href="#" class="fa fa-twitter icons"></a>
                        <a href="#" class="fa fa-linkedin icons"></a>
                        <a href="#" class="fa fa-instagram icons"></a>
                    </div>
                    </div>
                </footer>
</div>
        </React.Fragment>)
    }
}
export default Register