import React, { Component } from 'react'
import {MDBCol,MDBRow,MDBContainer,MDBBtn} from 'mdbreact';
import { Checkbox } from '@material-ui/core';

export default class Signup extends Component {
    render() {
        return (
            <div>
        <div className="container">
  <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">sign up</button>
  <div className="modal fade" id="myModal" role="dialog" >
    <div className="modal-dialog " >
      <div className="modal-content ">
        <div className="modal-header modal_header">
          <MDBRow>
            <MDBCol className="modal-title  " md='11'>
            <div className='modal_header_heading'>Sign up</div>
            </MDBCol>
            <MDBCol md='1'>
            <button type="button" className=" modal_header_icon" data-dismiss="modal" >&times;</button>
            </MDBCol>
          </MDBRow>
          
        </div>
        
        <div className="modal-body modal_body">
          <div className='modal_body_heading'>It’s free and always will be</div>
          <MDBRow>
            <MDBCol md='6'>
<div className='modal_body_subheading'>First name</div>

<div><input  className='modal_inputbox'/></div>
            </MDBCol>

            <MDBCol md='6'>
<div className='modal_body_subheading'>Company name</div>
<div><input placeholder='' className='modal_inputbox'/></div>
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol md='6'>
<div className='modal_body_subheading'>Last name</div>

<div><input  className='modal_inputbox'/></div>
            </MDBCol>

            <MDBCol md='6'>
<div className='modal_body_subheading'>Country</div>
<div><input placeholder='' className='modal_inputbox'/></div>
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol md='6'>
<div className='modal_body_subheading'>Email</div>

<div><input  className='modal_inputbox'/></div>
            </MDBCol>

            <MDBCol md='6'>
<div className='modal_body_subheading'>Phone</div>
<div><input placeholder='' className='modal_inputbox'/></div>
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol md='6'>
<div className='modal_body_subheading'>Password</div>

<div><input  className='modal_inputbox'/></div>
            </MDBCol>

            <MDBCol md='6'>
<div className='modal_body_subheading'>Confirm password</div>
<div><input placeholder='' className='modal_inputbox'/></div>
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol md='1'><Checkbox/></MDBCol>
            <MDBCol md='11' className='modal_body_contant1'>Remember me</MDBCol>
          </MDBRow>
        
          <MDBRow>
            <MDBCol md='1'><Checkbox/></MDBCol>
            <MDBCol md='11' className='modal_body_contant1'>
            By clicking Sign Up,you agree to our <b>Terms</b> and that you have read and understand 
              our <b>Data Use Policy</b>, including our <b>Cookie Use</b>
            </MDBCol>
          </MDBRow>
       <div>
         <button className='signup_btn'>Sign up</button>
       </div>  
        </div>
      </div>
    </div>
  </div>
</div>
            </div>
        )
    }
}
