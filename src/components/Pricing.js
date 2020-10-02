import React, { Component } from 'react'
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from 'mdbreact'
import Footer from "./footer";
import Navbar from "./navbar";

export default class Pricing extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div >
        <MDBContainer>
        <div className='contact_heading'>Pricing</div>
        <div id='support_width1'>
<div id='contact_contant1' className='contact_contant'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
</div>
</div>

                <div style={{textAlign:'center'}}>
                  <MDBBtn id='pricing_btn1'>Monthly</MDBBtn>
                  <MDBBtn id='pricing_btn2'>Annual</MDBBtn>
                </div>

                <MDBRow>
                  <MDBCol md='2' className='col-md-offset-4 review_container'>
<div>Start</div>
<div>
  <span>16</span>
  <span>$</span>
</div>
<div><MDBBtn>Enable</MDBBtn></div>
                  </MDBCol>
                </MDBRow>
                        <div id='support_width2'>
                        <div className='contact_heading' >Frequently asked questions about pricing </div>
                        <div className="panel-group pricing_block" id="accordion" >
                          <div className='collapse_box'>
        <div data-toggle="collapse" data-parent="#accordion" href="#collapse1">
        <img src={require("../assets/plus.png")} alt="" className='plus_minus' />
        <span className='support_collapse_heading' >About Dashify</span>
        </div>
      
    <div id="collapse1" className="panel-collapse collapse ">
      <div className="panel-body support_collapse_body">
      Google. Google Maps. Amazon Alexa. Apple Maps. Facebook. Bing. Yahoo. Yelp. It doesn’t matter which map, 
      app, voice assistant, search engine, GPS system, or social network consumers use to find and engage with 
      your business. What matters is that they discover accurate, complete, and compelling information at every turn.
      </div>
    </div>
    </div>
    <hr className='collapse_hr' />


    <div className='collapse_box'>
    <div data-toggle="collapse" data-parent="#accordion" href="#collapse2">
        <img src={require("../assets/plus.png")} alt="" className='plus_minus' />
        <span className='support_collapse_heading' >FAQ Center</span>
        </div>
      
    <div id="collapse2" className="panel-collapse collapse ">
      <div className="panel-body support_collapse_body">
      Google. Google Maps. Amazon Alexa. Apple Maps. Facebook. Bing. Yahoo. Yelp. It doesn’t matter which map, 
      app, voice assistant, search engine, GPS system, or social network consumers use to find and engage with 
      your business. What matters is that they discover accurate, complete, and compelling information at every turn.
      </div>
    </div>
    </div>
    <hr className='collapse_hr' />


    <div className='collapse_box'>
    <div data-toggle="collapse" data-parent="#accordion" href="#collapse3">
        <img src={require("../assets/plus.png")} alt="" className='plus_minus' />
        <span className='support_collapse_heading' >Guide & Tutorials</span>
        </div>
      
    <div id="collapse3" className="panel-collapse collapse ">
      <div className="panel-body support_collapse_body">
      Google. Google Maps. Amazon Alexa. Apple Maps. Facebook. Bing. Yahoo. Yelp. It doesn’t matter which map, 
      app, voice assistant, search engine, GPS system, or social network consumers use to find and engage with 
      your business. What matters is that they discover accurate, complete, and compelling information at every turn.
      </div>
    </div>
    </div>
    <hr className='collapse_hr' />
  </div>
  </div>
                            <div id='asknow'>
                        <span id='support_contant3'>Any more questions?</span>
                        <span id='support_contant4' className='support_contant'>Ask it now! </span>
                        {/* <hr id='line'/> */}
                        </div>
            </MDBContainer>
        </div>
        <Footer />
      </div>
    );
  }
}
