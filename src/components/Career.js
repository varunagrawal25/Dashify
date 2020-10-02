import React, { Component } from 'react'
import {MDBCol,MDBRow,MDBContainer,MDBBtn} from 'mdbreact';
export default class Career extends Component {
    render() {
        return (
            <div>
              <MDBContainer>
                <MDBRow>
                  <MDBCol md='6'>
                  <div id='career_heading'>When the world has questions, Dashify Answers</div>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md='6'>
                  <div className='career_contant' >
                We have an audacious goal to help every business and organization deliver 
                an official answer every time someone asks them a question.
                </div>
                  </MDBCol>

                  <MDBCol md='6'>
                  <div className='career_contant' >
                To achieve that, we need a global team made up of the brightest innovators, visionary thought
                 leaders, and enthusiastic collaborators who care about making a difference in the world while
                  building an amazing culture in the process.
                </div>
                  </MDBCol>
                </MDBRow>
                <div className='career_block'>
                <div className='career_subhead' >Does this sound like you? Join us!</div>
                <div className="panel-group " id="accordion" >
                          <div className='collapse_box'>
        <div data-toggle="collapse" data-parent="#accordion" href="#collapse1">
        <img src={require("../assets/plus.png")} alt="" className='plus_minus' />
        <span className='support_collapse_heading' >ENGINEERING</span>
        </div>
      
    <div id="collapse1" className="panel-collapse collapse ">
      <div className="panel-body support_collapse_body">
      
      Manager, Change and Release Management<br/>
     Senior IT Engineer<br/>
     Senior Salesforce Developer<br/>
      <MDBBtn className='collapse_btn'>Apply now</MDBBtn>
      </div>
      
    </div>
    </div>
    <hr className='collapse_hr' />

    <div className='collapse_box'>
        <div data-toggle="collapse" data-parent="#accordion" href="#collapse2">
        <img src={require("../assets/plus.png")} alt="" className='plus_minus' />
        <span className='support_collapse_heading' >FINANCE</span>
        </div>
      
    <div id="collapse2" className="panel-collapse collapse ">
      <div className="panel-body support_collapse_body">
      
      Manager, Change and Release Management<br/>
     Senior IT Engineer<br/>
     Senior Salesforce Developer<br/>
      <MDBBtn className='collapse_btn'>Apply now</MDBBtn>
      </div>
      
    </div>
    </div>
    <hr className='collapse_hr' />

    <div className='collapse_box'>
        <div data-toggle="collapse" data-parent="#accordion" href="#collapse3">
        <img src={require("../assets/plus.png")} alt="" className='plus_minus' />
        <span className='support_collapse_heading' >INFORMATION TECHNOLOGY</span>
        </div>
      
    <div id="collapse3" className="panel-collapse collapse ">
      <div className="panel-body support_collapse_body">
      
      Manager, Change and Release Management<br/>
     Senior IT Engineer<br/>
     Senior Salesforce Developer<br/>
      <MDBBtn className='collapse_btn'>Apply now</MDBBtn>
      </div>
      
    </div>
    </div>
    <hr className='collapse_hr' />

    <div className='collapse_box'>
        <div data-toggle="collapse" data-parent="#accordion" href="#collapse4">
        <img src={require("../assets/plus.png")} alt="" className='plus_minus' />
        <span className='support_collapse_heading' >LEADERSHIP PROGRAMS</span>
        </div>
      
    <div id="collapse4" className="panel-collapse collapse ">
      <div className="panel-body support_collapse_body">
      
      Manager, Change and Release Management<br/>
     Senior IT Engineer<br/>
     Senior Salesforce Developer<br/>
      <MDBBtn className='collapse_btn'>Apply now</MDBBtn>
      </div>
      
    </div>
    </div>
    <hr className='collapse_hr' />

    <div className='collapse_box'>
        <div data-toggle="collapse" data-parent="#accordion" href="#collapse5">
        <img src={require("../assets/plus.png")} alt="" className='plus_minus' />
        <span className='support_collapse_heading' >MARKETING</span>
        </div>
      
    <div id="collapse5" className="panel-collapse collapse ">
      <div className="panel-body support_collapse_body">
      
      Manager, Change and Release Management<br/>
     Senior IT Engineer<br/>
     Senior Salesforce Developer<br/>
      <MDBBtn className='collapse_btn'>Apply now</MDBBtn>
      </div>
      
    </div>
    </div>
    <hr className='collapse_hr' />

    <div className='collapse_box'>
        <div data-toggle="collapse" data-parent="#accordion" href="#collapse6">
        <img src={require("../assets/plus.png")} alt="" className='plus_minus' />
        <span className='support_collapse_heading' >SALES</span>
        </div>
      
    <div id="collapse6" className="panel-collapse collapse ">
      <div className="panel-body support_collapse_body">
      
      Manager, Change and Release Management<br/>
     Senior IT Engineer<br/>
     Senior Salesforce Developer<br/>
      <MDBBtn className='collapse_btn'>Apply now</MDBBtn>
      </div>
      
    </div>
    </div>
    <hr className='collapse_hr' />

    
    </div>
                <div className='career_subhead'> 
                <span  >Any more questions?</span>
                <span className='career_options' >Ask it now!</span>
                </div>
                </div>
              </MDBContainer>
                
            </div>
        )
    }
}
