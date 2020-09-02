import React, { Component } from 'react'
import '../css/Contactus.css'
import email_icon from '../assets/email_icon.png'
import call_icon from '../assets/call_icon.png'

import map from '../assets/map.png'
import { Button } from 'reactstrap'

export default class Contactus extends Component {
    render() {
        return (
            <div>
                <div id='heading'>Contacts us</div>
                <div id='contact_contant1' className='contact_contant'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                 labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                 laboris nisi ut aliquip ex ea commodo consequat.
                </div>

                <div>
                        <img src={call_icon} alt='support_call' id='contact_call_icon'/>
                            <div id='contact_call'>Call</div>
                            <div id='contact_contant2' className='contact_contant'>
                            +1 445 554 445 
                            +1 835 538 945
                                </div>
                        </div>
                <div>
                            <img src={email_icon} alt='support_email' id='contact_email_icon'/>
                            <div id='contact_email'>Email</div>
                            <div id='contact_contant3' className='contact_contant'>
                            
                            dashify@gmail.com
                             info-dashify@gmail.com
                                </div>
                        </div>

                        <div>
                        <img src={call_icon} alt='support_call' id='contact_add_icon'/>
                            <div id='contact_add'>Call</div>
                            <div id='contact_contant4' className='contact_contant'>
                            455 Larkspur Dr. California Springs, CA 92926 USA 
                                </div>
                        </div>
                        <div id='contact_subhead'>Reach out to us for any inquiry</div>

                        <div id='contact_name' >
                        Full Name
                            </div>
                            <div><input id='input_name' /></div>
                            <div id='contact_email_inquery'>
                            Your email 
                            </div>
                            <div><input id='input_email' /></div>
                            <div id='contact_message' >
                            Message
                            </div>
                            <div><textarea id='input_message' /></div>
                            <div>
                            <Button id='contact_submit'>Sumbit</Button>
                            </div>
                            <img src={map} alt='map' id='contact_map'/>
                            <div id='contact_social'>Social network</div>
            </div>
        )
    }
}
