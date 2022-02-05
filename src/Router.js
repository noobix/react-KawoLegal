import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Startups from './pages/Startup'
import Homepage from './pages/FirstPage'
import Navbar from './components/Navbar'

class Router extends React.Component {
    render() {
        return(<React.Fragment>
            <BrowserRouter>
            <Navbar />
                <Routes>
                    <Route path="/" element={<Homepage />}/>
                    <Route path="/Login" element={<Login />}/>
                    <Route path="/Register" element={<Register />}/>
                    <Route path="/Startups" element={<Startups />}/>
                </Routes>
            </BrowserRouter>
        </React.Fragment>)
    }
}
export default Router