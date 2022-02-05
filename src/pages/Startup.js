import React from "react";

class Startups extends React.Component {
    render(){
        return(<React.Fragment>
            <div class="container">
                <div class="row search-bar">
                    <form class="form-inline">
                    <input type="text" class="form-control search-w" id="FormControlInput1" placeholder="Search"/>
                    <button type="submit" class="btn btn-primary">Search</button>
                    </form>
                </div>
                <div class="row">
                    <div class="col-lg-2 images">
                    <img src="images/Thinkzoom.jpg" class="img-fluid" alt="..."/>
                    </div>
                    <div class="col-lg-10 texts">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div class="col-lg-2">
                    <img src="images/kisspng_png.jpg" class="img-fluid" alt="..."/>
                    </div>
                    <div class="col-lg-10">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div class="col-lg-2">
                    <img src="images/download (1).png" class="img-fluid" alt="..."/>
                    </div>
                    <div class="col-lg-10">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
export default Startups