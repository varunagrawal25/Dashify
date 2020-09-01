import React, { Component } from 'react'
import { NavLink, withRouter} from "react-router-dom";
import logo from '../assets/Logo.png'
import '../css/Navbar.css'
import {MDBNavbar, MDBNavbarBrand, MDBNavbarNav,MDBNavbarToggler, MDBCollapse} from "mdbreact";

 class Navbar extends Component {
  state = {
    isOpen: false ,
    
  }
  toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
  }
    render() {
        return (
  
      <MDBNavbar  className="navbar navbar-expand-lg navbar-light "  id='navbar' >
        <MDBNavbarBrand>
        <img src={logo} alt='logo' id='logo'/>
        </MDBNavbarBrand>
        <MDBNavbarToggler  onClick={this.toggleCollapse} />
        <MDBCollapse  isOpen={this.state.isOpen} navbar>
        
           <MDBNavbarNav right  >
           <div class="navbar-nav ml-auto topnav"   >
           
              <NavLink to="/" className='tabs' id='home'>Home</NavLink>
              
              
              <NavLink to="/about us" className='tabs' id='aboutus'>About Us</NavLink>
              
              
              <NavLink to="/features" className='tabs' id='features'> Features</NavLink>
              
              
              <NavLink to="/Pricing" className='tabs' id='pricing'>Pricing</NavLink>
              
              
              <NavLink to="/support" className='tabs' id='support'>Support</NavLink>
              
              
              <NavLink to="/signin" className='tabs' id='signin'>Sign in</NavLink>
              
              
                          <button id='demo_box' className='demo'>
                          Book A Demo
                          </button>
              
              </div>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
           
        )
    }
}
export default withRouter(Navbar)