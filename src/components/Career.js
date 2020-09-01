import React, { Component } from 'react'

export default class Career extends Component {
    render() {
        return (
            <div>
                <div id='career_heading'>When the world has questions, Dashify Answers</div>
                <div className='career_contant' id='career_contant1'>
                We have an audacious goal to help every business and organization deliver 
                an official answer every time someone asks them a question.
                </div>
                <div className='career_contant' id='career_contant2'>
                To achieve that, we need a global team made up of the brightest innovators, visionary thought
                 leaders, and enthusiastic collaborators who care about making a difference in the world while
                  building an amazing culture in the process.
                </div>
                <div className='career_subhead' id='career_subhead1'>Does this sound like you? Join us!</div>
                <div className='career_subhead' id='career_subhead2'>Any more questions?</div>
                <div className='career_options' id='career_ask'>Ask it now!</div>
                <hr id='ask_ul'/>
            </div>
        )
    }
}
