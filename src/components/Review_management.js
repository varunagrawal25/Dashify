import React, { Component } from 'react'
import '../css/Review_management.css'
import rm_img1 from '../assets/rm1.png'
import rm_img2 from '../assets/rm2.png'
import rm_img3 from '../assets/rm3.png'
import rm_img4 from '../assets/rm4.png'
import rm_img5 from '../assets/rm5.png'
import right_icon from '../assets/right_icon.png'
export default class Review_management extends Component {
    render() {
        return (
            <div>
                <div className='review_heading' id='review_heading1'>
                Dashify Analytics 
                </div>
                <div className='review_contant' id='review_contant1'>
                    <p>
                    Information is power when it comes to your business. The power to improve, change, and 
                    come up with strategic plans that effectively boost your business. You need to have an 
                    effective system in place that provides you with such data so you can stay ahead of the 
                    competition. 
                    </p>
                    <p>
                    This is where our review and ranking analytics come in handy. Have all the information you
                     need in one place so you can strategize and boost your business. Here is how our review and
                      ranking analytics can help you with the growth of your business.
                    </p>
                    
                </div>
                <div >
                    <img src={rm_img1} alt='rm1' id='rm1'/>
            <img src={rm_img2} alt='rm2' id='rm2'/>
                </div>
                <div className='review_heading' id='review_heading2'>
                What are review and ranking analytics? 
                </div>
                <div className='review_contant' id='review_contant2'>
                    <p>
                    Ranking analytics will help you to keep track of your ranking on major search engines by 
                    utilizing keywords. This will let you know how your business is doing in terms of ranking
                     on major search engines. You can then utilize this data to improve your rankings if need be. 
                    </p>
                    <p>
                    They will also show trends of keywords. Keywords that are on the rise and keywords that are 
                    declining. You can then adjust your SEO accordingly and effectively increase your rankings 
                    across search engines again.
                    </p>
                   
                </div>
                <div >
            <img src={rm_img3} alt='rm3' id='rm3'/>
            <img src={rm_img4} alt='rm4' id='rm4'/>
            <img src={rm_img5} alt='rm5' id='rm5'/>
                </div>
                <div className='review_heading' id='review_heading3'>
                Review analytics will help your business in managing its reputation by looking at all the
                 review metrics. They usually show:
                </div>
                <div id='review_container1'>
               <div style={{height:'50px'}}>
               <span><img src={right_icon} alt='right_icon' className='right_icon'/></span>
                <span className='review' id='review1'>
                  Total number of reviews across all platforms
                    </span>
               </div>
                   <div style={{height:'50px'}}>
                   <span> <img src={right_icon} alt='right_icon' className='right_icon'/></span>
                    <span className='review' id='review2'>
                    How many new reviews your business is receiving 
                    </span>
                   </div>
                    
                    <div style={{height:'50px'}}>
                    <span><img src={right_icon} alt='right_icon' className='right_icon'/></span>
                    <span className='review' id='review3'>
                    Average rating
                    </span>
                    </div>
                    
                   <div style={{height:'50px'}}>
                   <span><img src={right_icon} alt='right_icon' className='right_icon'/></span>
                    <span className='review' id='review4'>
                    The review response rate
                    </span>
                   </div>
                    
                    </div>
                <div className='review_contant' id='review_contant3'>
               
               <p>
               These metrics will be available for every single website your business is mentioned. You can 
                then utilize this data to come up with effective solutions that will improve the reputation 
                of your business.</p> 
                <p>
                We provide an effective system that is fast and reliable so you can have all
                 the data available to you in no time. It will optimize all metrics and keep them in one place 
                 so you can easily navigate and use them for your strategic business marketing plans.
                </p>
                </div>
                <div className='review_heading' id='review_heading4'>
                Why your business needs review and ranking analytics
                </div>
                <div className='review_contant' id='review_contant4'>
                Every business that wants to grow organically, utilizes these techniques to stay ahead. 
                Having such information available to you goes a long way in improving the services of your 
                business. Here is how you can benefit from our review and ranking analytic services:
                </div>
                <div id='review_container2' />
                <div id='review_contant5'>
                 Our user-friendly systems will give you all ranking and review analytics that you can utilize
                 to grow your business. We are experts in these services and will make sure that you have 
                 everything you need to grow your business in the best direction. If you want to employ the 
                 use of the review and ranking analytics then hire our services now!
                </div>
                <div >
                          <button id='review_book_demo_box' className='review_book_demo'>
                          Book A Demo
                          </button>
                        </div>
                        <div >
                          <button id='review_learn_more_box' className='review_learn_more'>
                          Learn more
                          </button>
                        </div>
            </div>
        )
    }
}
