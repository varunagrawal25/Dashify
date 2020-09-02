import React, { Component } from 'react'
import { NavLink, withRouter} from "react-router-dom";
import logo from '../assets/Logo.png'
import '../css/Navbar.css'
import {MDBNavbar, MDBNavbarBrand, MDBNavbarNav,MDBNavbarToggler, MDBCollapse} from "mdbreact";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter ,MDBCol,MDBRow} from 'mdbreact';
import { Checkbox } from '@material-ui/core';

 class Navbar extends Component {
  state = {
    isOpen: false ,
    modal: false
    
  }
  toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });     
  }
 
  
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
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
              <NavLink to="/signin" className='tabs' id='signin' onClick={this.toggle}>Sign in</NavLink>
              
              
              <MDBContainer >
                
                       
                           
                        <MDBModal isOpen={this.state.modal} toggle={this.toggle} id='signin_container' >
                            <MDBModalHeader toggle={this.toggle} id='signin_header'>
                                <span></span>
                                <span id='signin_header_heading'>Log In</span>
                            </MDBModalHeader>
                            <MDBModalBody style={{marginLeft:'30px',borderRadius: '10px'}} >
                            <div className='signin_body_heading' >
                            Email
                            </div>
                            <div><input className='signin_inputbox' /></div>
                            <div className='signin_body_heading' >
                            Password 
                            </div>
                            <div><input className='signin_inputbox' /></div>
                            <div>
                              <span><Checkbox/></span>
                              <span className='signin_body_heading'>Remember me</span>
                            </div>
                            <div>
                            <MDBBtn id='signin_button'>Send</MDBBtn>
                            </div>

                            </MDBModalBody>
                        </MDBModal>
                        </MDBContainer>
              
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