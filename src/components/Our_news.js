import React, { Component } from 'react'
import '../css/Our_news.css'
import line from '../assets/line.png'
import arrow from '../assets/arrow.png'
import news1 from '../assets/news1.png'
import news2 from '../assets/news2.png'
import news3 from '../assets/news3.png'
import news4 from '../assets/news4.png'
import youtube from '../assets/youtube.png'

export default class Our_news extends Component {
    render() {
        return (
            <div>
                <div>
                <div id='news_heading1' >
                What's new?
                </div>
                <div className='news_contant' id='news_contant0'>
                    <p>
                    Find solutions to customer service, general inquiry, product problem, business partnership, 
                    software upgrade, refund policy and any other issues related to Dashify 
                    </p>
                </div>
                </div>

                <div>
                    <span id='news_month1'>
                    September 2020
                    </span>
                    <span id='news_month2'>
                    August 2020
                    </span>
                    <img src={arrow} alt='arrow' id='news_arrow'/>
                </div>
               
                <img src={line} alt='line' id='news_hr1'/>
                
                <div>
                <div className='date' id='date1'>
                02.04.2020
                </div>
                <div className='sub_news_heading' id='sub_news_heading1'>
                4 Reasons Search Is the Most Critical Issue for Your Brand This Year
                </div>
                <div className='news_contant' id='news_contant1'>
                    <p>
                    With 90% of consumers reporting that they use search at every stage of the customer
                     lifecycle. With 90% of consumers reporting that they use search at every stage of the 
                     customer lifecycle. With 90% of consumers reporting that they use search at every stage 
                     of the customer
                    </p>
                    
                </div>
                </div>
                <hr id='news_hr2'/>
                <div>
                <div className='date' id='date2'>
                02.04.2020
                </div>
                <div className='sub_news_heading' id='sub_news_heading2'>
                4 Reasons Search Is the Most Critical Issue for Your Brand This Year
                </div>
                <div className='news_contant' id='news_contant2'>
                    <p>
                    With 90% of consumers reporting that they use search at every stage of the customer
                     lifecycle. With 90% of consumers reporting that they use search at every stage of the 
                     customer lifecycle. With 90% of consumers reporting that they use search at every stage 
                     of the customer
                    </p>
                    
                </div>
                </div>
                <hr id='news_hr3'/>
                <div>
                <div>
                <img src={news1} alt='news1' id='news1'/>
                </div>
                <div className='sub_news_heading' id='sub_news_heading3'>
                Google’s Latest API Update: Specify Service Items for Your Business
                </div>
                <div className='news_contant' id='news_contant3'>
                    <p>
                    On April 27th 2020, Google launched version 4.6 of its Google My Business (GMB) API for...
                     Building brand trust is of the utmost importance for businesses. It fosters loyalty with 
                     existing...With 90% of consumers reporting that they use search at every stage of the 
                     customer lifecycle...
                    </p>
                </div>
                </div>
                <hr id='news_hr4'/>
                <div>
                <div>
                <img src={news2} alt='news2' id='news2'/>
                </div>
                <div className='sub_news_heading' id='sub_news_heading4'>
                Google’s Latest API Update: Specify Service Items for Your Business
                </div>
                <div className='news_contant' id='news_contant4' >
                   
                    On April 27th 2020, Google launched version 4.6 of its Google My Business (GMB) API for...
                     Building brand trust is of the utmost importance for businesses. It fosters loyalty with 
                     existing...With 90% of consumers reporting that they use search at every stage of the 
                     customer lifecycle...
                    
                </div>
                </div>
                <hr id='news_hr5'/>
                <div className='sub_news_heading' id='sub_news_heading5'>
                Videos 
                </div>
                <div>
                <img src={news3} alt='news3' id='news3'/>
                <img src={youtube} alt='youtube' id='y_icon1'/>
                    <div className='sub_news_heading' id='sub_news_heading6'>
                    Specify Service Items for You
                    </div>
                </div>
                <hr id='news_hr6'/>
                <div>
                <img src={news4} alt='news4' id='news4'/>
                <img src={youtube} alt='youtube' id='y_icon2'/>
                    <div className='sub_news_heading' id='sub_news_heading7'>
                    Specify Service Items for You
                    </div>
                </div>
                <hr id='news_hr7'/>
                <div id='news_container'/>
                <div id='news_heading2'>
                See how your business can deliver verified answers to searching consumers, 
                helping drive discovery and revenue
                </div>
               
                <div>
                          <button id='news_book_demo_box' className='news_book_demo'>
                          Book A Demo
                          </button>
                        </div>
                        <div >
                          <button id='news_learn_more_box' className='news_learn_more'>
                          Learn more
                          </button>
                        </div>
                      
            </div>
        )
    }
}
