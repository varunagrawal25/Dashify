import React, { Component } from 'react'
import email_icon from '../assets/email_icon.png'
import call_icon from '../assets/call_icon.png'
import address_icon from '../assets/address_icon.png'
import contact_fb_icon from '../assets/contact_fb_icon.png'
import contact_instagram_icon from '../assets/contact_instagram_icon.png'
import contact_linkedin_icon from '../assets/contact_linkedin_icon.png'
import contact_twitter_icon from '../assets/contact_twitter_icon.png'
import map from '../assets/map.png'
import { Button } from 'reactstrap'
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact'
import Footer from "./footer";
import Navbar from "./navbar";

export default class Contactus extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="main-blog">
        <MDBContainer>
        <div className='contact_heading'>Contacts us</div>
        <div id='contact_contant1_width'>
<div id='contact_contant1' className='contact_contant'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
 labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
 laboris nisi ut aliquip ex ea commodo consequat.
</div>
</div>
 <MDBRow>
   <MDBCol md='4'>
<MDBRow>
<MDBCol md='4' >
<img src={call_icon} alt='' className='contactus_icon'/>
</MDBCol>
<MDBCol md='8'>
<div className='contact_heading2'>Call</div>
            <div id='contact_contant2' className='contact_contant'>
            <div>+1 445 554 445 </div>
            <div>+1 835 538 945</div>
                </div>
</MDBCol>
</MDBRow>
   </MDBCol>


   <MDBCol md='4'>
<MDBRow>
<MDBCol md='4' >
<img src={email_icon} alt='' className='contactus_icon'/>
</MDBCol>
<MDBCol md='8'>
<div className='contact_heading2'>Email</div>
            <div id='contact_contant2' className='contact_contant'>
            <div>dashify@gmail.com </div>
            <div>info-dashify@gmail.com</div>
                </div>
</MDBCol>
</MDBRow>
   </MDBCol>

   <MDBCol md='4'>
<MDBRow>
<MDBCol md='4' >
<img src={address_icon} alt='' className='contactus_icon'/>
</MDBCol>
<MDBCol md='8'>
<div className='contact_heading2'>Address</div>
            <div id='contact_contant2' className='contact_contant'>
            455 Larkspur Dr. California Springs, CA 92926 USA 
                </div>
</MDBCol>
</MDBRow>
   </MDBCol>
   
 </MDBRow>
 <div id='contact_subhead'>Reach out to us for any inquiry</div>
 <MDBRow>
   <MDBCol md='5'>
   
<div >
<div className='contact_heading3' >
Full Name
    </div>
    <div><input className='contactus_input' /></div>
    </div>
<div>
    <div className='contact_heading3'>
    Your email 
    </div>
    <div><input className='contactus_input' /></div>
    </div>
<div>
    <div className='contact_heading3' >
    Message
    </div>
    <div><textarea id='contactus_textbox' /></div>
    </div>

    <div>
    <Button id='contact_submit'>Sumbit</Button>
    </div>
   </MDBCol>

   <MDBCol md='7'>
   <img src={map} alt='map' id='contact_map'/>
   </MDBCol>
 </MDBRow>
        
            
            <div id='contact_social'>
              <div >Social network</div>
              <div>
              <img src={contact_linkedin_icon} alt='' className='social_icon'/>
              <img src={contact_twitter_icon} alt='' className='social_icon'/>
              <img src={contact_instagram_icon} alt='' className='social_icon'/>
              <img src={contact_fb_icon} alt='' className='social_icon' />
              
              
              </div>
            </div>
           

            </MDBContainer>
        </div>
        <Footer />
      </div>
    );
  }
}
