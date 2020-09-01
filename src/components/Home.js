import React, { Component } from 'react'
import '../css/Home.css'
import arrow from '../assets/arrow.png'
import home_icon1 from '../assets/home_icon1.png'
import home_icon2 from '../assets/home_icon2.png'
import home_icon3 from '../assets/home_icon3.png'
import home_icon4 from '../assets/home_icon4.png'
import home_icon5 from '../assets/home_icon5.png'
import home_icon6 from '../assets/home_icon6.png'
import home_icon7 from '../assets/home_icon7.png'
import home_icon8 from '../assets/home_icon8.png'
import home_icon9 from '../assets/home_icon9.png'
import home_icon10 from '../assets/home_icon10.png'
import home_icon11 from '../assets/home_icon11.png'
import home_icon12 from '../assets/home_icon12.png'
import home_icon13 from '../assets/home_icon13.png'
import home_icon14 from '../assets/home_icon14.png'
import home_icon15 from '../assets/home_icon15.png'
import home_blog1 from '../assets/home_blog1.png'
import home_blog2 from '../assets/home_blog2.png'
import home_blog3 from '../assets/home_blog3.png'
import home_cf1 from '../assets/home_cf1.png'
import home_cf2 from '../assets/home_cf2.png'
import home_cf3 from '../assets/home_cf3.png'
import home_cf4 from '../assets/home_cf4.png'
import down_arrow from '../assets/down_arrow.png'
import home_line from '../assets/home_line.png'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div id='home_heading1' >One Place, All Business</div>
                <div id='home_contant1' > 
                    <p>
                    Having everything in one place means organization, simplifying business and more time
                     spent on the important stuff Dashify organize, update and keep track of all your
                      information and social pages from one convenient dashboard. Effortlessly.
                    </p>
                </div>
                <div>
                          <button id='home_book_demo_box' className='home_book_demo'>
                          Book A Demo
                          </button>
                        </div>
                        <div >
                          <button id='home_learn_more_box' className='home_learn_more'>
                          Learn more
                          </button>
                        </div>
                        <div id='home_heading2' className='home_heading'>Check How Your Business Appears Online </div>
                          <div>
                          <div id='bussiness_box'/>
                          <div id='bussiness_select1'>Choose country</div>
                          <img src={down_arrow} alt='down_arrow' id='home_down_arrow1'/>
                          <div id='bussiness_select2'>Business Name</div>
                          <img src={down_arrow} alt='down_arrow' id='home_down_arrow2'/>
                          <img src={home_line} alt='home_line' id='home_line'/>
                          <div id='bussiness_select3'>Business Type</div>
                          <img src={down_arrow} alt='down_arrow' id='home_down_arrow3'/>

                          <button id='home_scan_box' className='home_scan'>
                          Scan now
                          </button>
                          </div>
                        <div id='home_heading3' className='home_heading'>What Dashify Features </div>
                         <div>
                         <div id='home_card1'/>
                         <div id='home_num_card1' className='home_numbers'>01</div>
                        <div id='home_card_heading1' className='home_card_heading'>Management</div>
                        <div id='home_card_subhead1' className='home_card_subhead'>Keep it streamlined</div>
                        <div id='home_card_contant1' className='home_card_contant'>
                            <p>
                            Manage everything effortlessy from one place at any time. Dashify was designed 
                            with streamlined simplicity in mind.
                            </p>
                        </div>
                        </div>
                        <div>
                        <div id='home_card2'/>
                        <div id='home_num_card2' className='home_numbers'>02</div>
                       <div id='home_card_heading2' className='home_card_heading'>Review tracker</div>
                        <div id='home_card_subhead2' className='home_card_subhead'>Who said that?</div>
                        <div id='home_card_contant2' className='home_card_contant'>
                            <p>
                            What it good? Was it bad? Whatever they thought, see it instantly by tracking 
                            business reviews and keeping an eye on who said what.
                            </p>
                        </div> 
                        </div>
                        <div>
                        <div id='home_card3'/>
                        <div id='home_num_card3' className='home_numbers'>03</div>
                       <div id='home_card_heading3' className='home_card_heading'>Promotion </div>
                        <div id='home_card_subhead3' className='home_card_subhead'>Making business louder</div>
                        <div id='home_card_contant3' className='home_card_contant'>
                            <p>
                            Promotion can make or break a business. Get your seen, heard and clicked with the
                             right promotion, all from the convenience of one place.
                            </p>
                        </div> 
                        </div>
                        <div>
                        <div id='home_card4'/>
                        <div id='home_num_card4' className='home_numbers'>04</div>
                       <div id='home_card_heading4' className='home_card_heading'>Notification feed</div>
                        <div id='home_card_subhead4' className='home_card_subhead'>Instant interaction</div>
                        <div id='home_card_contant4' className='home_card_contant'>
                            <p>
                            Interact with your target audience, customers and clients instantly by keeping on 
                            top of all notifications on every platform. You’ll never miss another ding. 
                            </p>
                        </div> 
                        </div>
                        <div>
                        <div id='home_card5'/>
                        <div id='home_num_card5' className='home_numbers'>05</div>
                       <div id='home_card_heading5' className='home_card_heading'>Analytics</div>
                        <div id='home_card_subhead5' className='home_card_subhead'>Prioritize</div>
                        <div id='home_card_contant5' className='home_card_contant'>
                            <p>
                            Performance is paramount, and Dashify keep an eye on it for you. With complete 
                            precision, monitor how well you’re doing at any time with astute and accurate 
                            analytics.
                            </p>
                        </div> 
                        </div> 
                        <div id='learn_more'> Learn more</div>
                        <img src={arrow} alt='arrow' id='home_arrow1'/>
                        <div id='home_heading4' className='home_heading'>Sync Your Business</div>
                        <div id='home_contant2' className='home_contant'>
                            Connect your business with all these great apps from one dashboard
                            </div>
                        <img src={home_icon1} alt='home_icon1' id='home_icon1'/>
                        <img src={home_icon2} alt='home_icon2' id='home_icon2'/>
                        <img src={home_icon3} alt='home_icon3' id='home_icon3'/>
                        <img src={home_icon4} alt='home_icon4' id='home_icon4'/>
                        <img src={home_icon5} alt='home_icon5' id='home_icon5'/>
                        <img src={home_icon6} alt='home_icon6' id='home_icon6'/>
                        <img src={home_icon7} alt='home_icon7' id='home_icon7'/>
                        <img src={home_icon8} alt='home_icon8' id='home_icon8'/>
                        <img src={home_icon9} alt='home_icon9' id='home_icon9'/>
                        <img src={home_icon10} alt='home_icon10' id='home_icon10'/>
                        <img src={home_icon11} alt='home_icon11' id='home_icon11'/>
                        <img src={home_icon12} alt='home_icon12' id='home_icon12'/>
                        <img src={home_icon13} alt='home_icon13' id='home_icon13'/>
                        <img src={home_icon14} alt='home_icon14' id='home_icon14'/>
                        <img src={home_icon15} alt='home_icon15' id='home_icon15'/>
                        <div id='many_more'>Many more</div>
                        <img src={arrow} alt='arrow' id='home_arrow2'/>
                        <button id='home_get_started_box' className='home_get_started'>
                        Get started
                          </button>

                        <div id='home_heading5' className='home_heading'>Trusted By Companies</div>
                        <div  id='home_contant3' className='home_contant'>
                        With our mission in mind we are leading brands into the future of search
                        </div>
                        <div id='cust_stories'>See customer stories</div>
                        <img src={arrow} alt='arrow' id='home_arrow3'/>
                        <div id='home_heading6' className='home_heading'>Specializing In Brand Awareness</div>
                        <div  id='home_contant4' className='home_contant'>
                        Restaurants, Hotels, Retail, Healthcare, Home Improvement Automative, Fincanical, Many more
                        </div>
                        <div id='home_heading7' className='home_heading'>Blog</div>
                        <div  id='home_contant5' className='home_contant'>
                        Dashify occasionally accepts articles from guest writers to complement our blog.
                         If you wish to submit an article for consideration, please first check our
                          contributor guidelines.
                        </div>
                        <div>
                    <span id='home_month1'>
                    September 2020
                    </span>
                    <span id='home_month2'>
                    August 2020
                    </span>
                    <img src={arrow} alt='arrow' id='home_arrow4'/>
                </div>
                <hr id='home_hr'/>
                <div>
                <div id='home_blog_card1'/>
                <img src={home_blog1} alt='home_blog' id='blog_img1'/>
                <div id='home_blog_heading1'>
                Google’s Latest API Update: Specify Service Items for Your Business
                </div>
                <div id='home_blog_contant1'>
                On April 27th 2020, Google launched version 4.6 of its Google My Business (GMB) API for...
                </div>
                </div>


                <div>
                <div id='home_blog_card2'/>
                <img src={home_blog2} alt='home_blog' id='blog_img2'/>
                <div id='home_blog_heading2'>
                4 Reasons Search Is the Most Critical Issue for Your Brand This Year
                </div>
                <div id='home_blog_contant2'>
                With 90% of consumers reporting that they use search at every stage of the customer lifecycle...
                </div>
                </div>

                <div>
                <div id='home_blog_card3'/>
                <img src={home_blog3} alt='home_blog' id='blog_img3'/>
                <div id='home_blog_heading3'>
                3 Moments That Make or Break a Customer’s Trust in a Brand
                </div>
                <div id='home_blog_contant3'>
                Building brand trust is of the utmost importance for businesses. It fosters loyalty with existing...
                </div>
                </div>
                <div id='all_article'>Read all articles</div>
                        <img src={arrow} alt='arrow' id='home_arrow5'/>
                <div id='home_heading8' className='home_heading'>We Appreciate Our Customer`s Feedbacks!</div>
                <div  id='home_contant6' className='home_contant'>
                    Here’s what some of our customers say about our work.
                    </div>
                    <div>
                <div id='cf_card1'/>
                <img src={home_cf1} alt='home_cf' id='cf_img1'/>
                <div id='cf_contant1'>
                We believe that Dashify is the tool that will help keep our brand information up to date and
                 consistent across the web, and allow us to keep scaling up our local SEO efforts!
                </div>
                <div id='cf_name1'>
                Abram George
                </div>
                <div id='cf_comp_name1'> Company name</div>
                </div>

                <div>
                <div id='cf_card2'/>
                <img src={home_cf2} alt='home_cf' id='cf_img2'/>
                <div id='cf_contant2'>
                We have gone to great lengths to manage all our retail stores internally, from a central 
                database. We have a centralized system with checks and balances in place, so it all flows 
                out from that one database as a source of truth. Dashify came in and helped us do that
                </div>
                <div id='cf_name2'>
                Rose Mango
                </div>
                <div id='cf_comp_name2'> Company name</div>
                </div>

                <div>
                <div id='cf_card3'/>
                <img src={home_cf3} alt='home_cf' id='cf_img3'/>
                <div id='cf_contant3'>
                Dashify is now fundamentally embedded into our marketing initiatives and digital presence
                 system. The purpose of our digital presence is to drive diners into our actual restaurant 
                 locations time and again, and that is where Dashify's platform is invaluable 
                </div>
                <div id='cf_name3'>
                Marcus Bergson
                </div>
                <div id='cf_comp_name3'> Company name</div>
                </div>

                <div>
                <div id='cf_card4'/>
                <img src={home_cf4} alt='home_cf' id='cf_img4'/>
                <div id='cf_contant4'>
                Smart and easy to use!
                </div>
                <div id='cf_name4'>
                Roger Curtis
                </div>
                <div id='cf_comp_name4'> Company name</div>
                </div>

                    <div id='read_more'>Read more</div>
                        <img src={arrow} alt='arrow' id='home_arrow6'/>
            </div>
        )
    }
}
