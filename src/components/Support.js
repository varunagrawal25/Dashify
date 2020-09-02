import React, { Component } from 'react'
import '../css/Support.css'
import email_icon from '../assets/email_icon.png'
import call_icon from '../assets/call_icon.png'
import chat_icon from '../assets/chat_icon.png'
import camera from '../assets/camera.png'
import model_img1 from '../assets/model_img1.png'
import model_img2 from '../assets/model_img2.png'
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter ,MDBCol,MDBRow} from 'mdbreact';
export default class Support extends Component {
    state = {
        modal: false
      }
      
      toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
      }
    render() {
        
        return (
            <div>
                <div id='support_heading1'>Welcome to the Support Center</div>
                    <div id='support_contant1' className='support_contant'>
                    Find solutions to customer service, general inquiry, product problem,
                     business partnership, software upgrade, refund policy and any other issues
                      related to Dashify
                    </div>
                    
                    <input type='text' placeholder='How can we help you today?' id='support_contant2' className='support_contant '/>
                    <div>
                          <button id='Search_box' > 
                          Search
                          </button>
                        </div>
                        <div id='support_heading2' >Have a question?</div>
                            <div>
                        <span id='support_contant3'>Any more questions?</span>
                        <span id='support_contant4' className='support_contant'>Ask it now! </span>
                        <hr id='line'/>
                        </div>

                        <div>
                            <img src={email_icon} alt='support_email' id='support_email'/>
                            <div id='subsupport_heading1' className='subsupport_heading'>Email</div>
                            <div id='support_contant5' className='support_contant'>
                                Dashify Listings, we created an entirely new way for businesses to control the facts 
                                about their
                                </div>
                        </div>

                        <MDBContainer >
                        <a onClick={this.toggle}>
                            <img src={chat_icon} alt='support_chat' id='support_chat'/>
                            </a>
                        <MDBModal isOpen={this.state.modal} toggle={this.toggle} >
                            <MDBModalHeader toggle={this.toggle} id='modal_header'>
                                <span></span>
                                <span id='modal_header_heading'>Live Support Chat</span>
                            </MDBModalHeader>
                            <MDBModalBody >
                            <div id='modal_body_heading' >
                            You are chatting with <b>Support Team</b>
                            </div>
                            <hr className='modal_hr'/>
                            
                            <MDBRow>
                                <MDBCol className='col-md-3' ><img src={model_img1} alt='model_img1' /></MDBCol>
                                <MDBCol className='col-md-9'>
                                <div className='modal_body_subheading'>Support Team</div>
                                <div className='modal_body_contant'>Hello! How can I help you?</div>
                                </MDBCol>
                            </MDBRow>
                            <hr className='modal_hr'/>
                            
                            <MDBRow>
                                <MDBCol className='col-md-3' ><img src={model_img2} alt='model_img2' /></MDBCol>
                                <MDBCol className='col-md-9'>
                                <div className='modal_body_subheading'>You</div>
                                <div className='modal_body_contant'>Hi there... </div>
                                </MDBCol>
                            </MDBRow>
                            </MDBModalBody>

                            
                                <div id='modal_footer_box'>
                                    <div id='modal_footer_innerbox'>
                                     <input placeholder='Type your message...' id='inputbox'/>
                                     <img src={camera} alt='camera' id='camera' />
                                     <MDBBtn id='modal_button'>Send</MDBBtn>
                                     </div>

                                </div>
                            
                            
                        </MDBModal>
                        </MDBContainer>
                        <div>
                        
                            <div id='subsupport_heading2' className='subsupport_heading'>Chat</div>
                            <div id='support_contant6' className='support_contant'>
                                Dashify Listings, we created an entirely new way for businesses to control the facts 
                                about their
                                </div>
                        </div>

                        <div>
                        <img src={call_icon} alt='support_call' id='support_call'/>
                            <div id='subsupport_heading3' className='subsupport_heading'>Call</div>
                            <div id='support_contant7' className='support_contant'>
                                Dashify Listings, we created an entirely new way for businesses to control the facts 
                                about their
                                </div>
                        </div>
            </div>
        )
    }
}
