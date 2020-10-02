import React, { Component } from 'react'
import {MDBCol,MDBRow,MDBContainer,MDBBtn} from 'mdbreact';
import { Checkbox } from '@material-ui/core';
export default class Login extends Component {
    render() {
        return (
            <div>
              
<div className="container">
  <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Log In</button>
  <div className="modal fade" id="myModal" role="dialog" >
  <div className="modal-dialog " id='login_width'>
      <div className="modal-content ">
        <div className="modal-header modal_header">
          <MDBRow>
            <MDBCol className="modal-title  " md='10'>
            <div className='modal_header_heading'>Log In</div>
            </MDBCol>
            <MDBCol md='2'>
            <button type="button" className=" modal_header_icon" data-dismiss="modal" >&times;</button>
            </MDBCol>
          </MDBRow>
        </div>
        
        <div className="modal-body modal_body">
        <div style={{padding:'0px 10%'}}>
          <MDBRow>
            <MDBCol>
<div className='modal_body_subheading'>Email</div>

<div><input  className='modal_inputbox'/></div>
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol >
<div className='modal_body_subheading'>Password</div>

<div><input  className='modal_inputbox'/></div>
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol md='2' className='modal_checkbox'><Checkbox/></MDBCol>
            <MDBCol md='10' className='modal_body_contant1'>Remember me</MDBCol>
          </MDBRow>
        
       <div>
         <button className='login_btn'>Log in</button>
       </div>  
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
