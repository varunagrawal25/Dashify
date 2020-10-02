import React, { Component } from 'react'
import '../css/Blog.css'
import line from '../assets/line.png'
// import arrow from '../assets/arrow.png'
import blog1 from '../assets/blog1.png'
import blog2 from '../assets/blog2.png'
import blog3 from '../assets/blog3.png'
import blog4 from '../assets/blog4.png'
import blog5 from '../assets/blog5.png'
import blog6 from '../assets/blog6.png'
import blog7 from '../assets/blog7.png'
import blog8 from '../assets/blog8.png'
import blog9 from '../assets/blog9.png'
import blog10 from '../assets/blog10.png'



export default class Blog extends Component {
    render() {
        return (
            <div className="container" style={{backgroundColor:'red'}}>
                <div className="row" >
                    <div className=" blog_heading">
                Our Blogs
                    </div>
                </div>

                <div className="row">
                    <div className='blog_contant'>
                    
                    Find solutions to customer service, general inquiry, product problem, business partnership, 
                    software upgrade, refund policy and any other issues related to Dashify 

                    </div>
                </div>
               
                
                    <div>
                    <span className='blog_month'>
                    September 2020
                    </span>
                    <span className='blog_month'>
                    August 2020
                    </span>
                    {/* <img src={arrow} alt='arrow' /> */}
                </div>

                <img src={line} alt='line'/>

                <div className="row">
                    <div  className='col-md-8 blog_container ' style={{backgroundColor:'yellow'}}>
                        <div className="row">
                        <div className='col-md-6'>
                        <img src={blog1} alt='blog1' className='blog_img1' />
                        </div>
                        
                        <div className='col-md-6 '>
                        <div className='sub_blog_heading' >
                          Google’s Latest API Update: Specify Service Items for Your Business
                          </div>
                          <div  className='blog_contant'>
                          On April 27th 2020, Google launched version 4.6 of its Google My Business (GMB) API for... 
                          </div>
                          </div>
                        </div>
                    </div>
                    <div  className='col-md-4 blog_container' style={{backgroundColor:'green'}} >
                     
                        <div><img src={blog2} alt='blog2' className='blog_img2'/> </div>
                        <div className=''>
                        <div className='sub_blog_heading' > 4 Reasons Search Is the Most Critical Issue</div>
                        <div className='blog_contant'> With 90% of consumers reporting that they use search at every stage of the customer lifecycle...</div>
                        </div>
                    </div>
                </div>

                {/* <div className="row">
                    <div className="column">
                    <div>
                
                <img src={blog3} alt='blog3' id='blog3'/>
                <div id='blog_container5'/>
                <div><img src={blog4} alt='blog4' id='blog4'/> </div>
                <div className='sub_blog_heading' id='sub_blog_heading3'>
                Specify Service Items for You
                  </div>
                  <div id='blog_contant3' className='blog_contant'>
                  On April 27th 2020, Google launched version 4.6 of its Google My Business (GMB) API for... 
                  </div>
                    
            <div>
            <div id='blog_container6'/> 
                <div><img src={blog5} alt='blog5' id='blog5'/> </div>
                <div className='sub_blog_heading' id='sub_blog_heading4'> 
                4 Reasons Search Is the Most Critical Issue for Your Brand This Year
                </div>
                <div id='blog_contant4' className='blog_contant' > 
                With 90% of consumers reporting that they use search at every...
                </div>
                </div>
      
                </div>
                    </div>
                </div>

                <div className="row">
                    <div className="column">
                    <div>
                
                        
                <div id='blog_container5'/>
                <img src={blog6} alt='blog6' id='blog6'/>
                
                <div className='sub_blog_heading' id='sub_blog_heading5'>
                4 Reasons Search Is the Most Critical Issue for Your Brand This Year
                  </div>
                  <div id='blog_contant5' className='blog_contant'>
                  With 90% of consumers reporting that they use search at every stage of the customer lifecycle...
                  </div>
                    
            <div>
            <div id='blog_container6'/> 
            <div><img src={blog7} alt='blog7' id='blog7'/> </div>
                
                <div className='sub_blog_heading' id='sub_blog_heading6'> 
                4 Reasons Search Is the Most Critical Issue for Your Brand This Year
                </div>
                <div id='blog_contant6' className='blog_contant' > 
                With 90% of consumers reporting that they use search at every stage of the customer lifecycle...
                </div>
                </div>
                <div><img src={blog8} alt='blog8' id='blog8'/> </div>
                </div>
               
                    </div>
                </div>
                
                <div className="row">
                    <div className="column">
                    <div>
                <div id='blog_container7'/>
                <div><img src={blog9} alt='blog9' id='blog9'/></div>
                        <div className='sub_blog_heading' id='sub_blog_heading7'>
                        Specify Service Items for You
                          </div>
                          <div id='blog_contant7' className='blog_contant'>
                          On April 27th 2020, Google launched version 4.6 of its Google My Business (GMB) API for... 
                          </div>
                            
                    <div>
                    <div id='blog_container8'/> 
                        <div><img src={blog10} alt='blog10' id='blog10'/> </div>
                        <div className='sub_blog_heading' id='sub_blog_heading8'> 
                        Google’s Latest API Update: Specify Service Items for Your Business
                        </div>
                        <div id='blog_contant8' className='blog_contant'> 
                        On April 27th 2020, Google launched version 4.6 of its Google My Business (GMB) API for...
                        </div>
                        </div>
                        
                        </div>
                    </div>
                </div>
               

                
                
                
               
                        

                        
                    
                
              
                <div id='blog_container9'/>
                <div id='blog_heading2'>
                See how your business can deliver verified answers to searching consumers, 
                helping drive discovery and revenue
                </div>
               
                <div>
                          <button id='blog_book_demo_box' className='blog_book_demo'>
                          Book A Demo
                          </button>
                        </div>
                        <div >
                          <button id='blog_learn_more_box' className='blog_learn_more'>
                          Learn more
                          </button>
                        </div> */}
                      
            </div>
        )
    }
}
