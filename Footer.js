import React from "react";
import "./Footer.css";


function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
         
          {/* Column2 */}
          <div className="col">
            <h4>Products</h4>
            <ui className="list-unstyled">
              <li> Remote First hiring</li>
              <li>Remote first plannig</li>
              <li>Remote first Screening</li>
              <li>Remote first Interviewing</li>
              <li>Remote first Ranking</li>
              <li>Insight</li>
              <li>HackerRank for Developerg</li>
              <li>HackerRank for School</li>
              <li>Pricing</li>
              <li>assessment</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>SOLUTIONS</h4>
            <ui className="list-unstyled">
              <li>Enterprise Technical Hiring</li>
              <li>Remote HiringF</li>
              <li>University Recruiting</li>
              <li>Diversity & Inclusion</li>
              <li>Professional Hiring</li>
              <li>Professional Services</li>
            </ui>
          </div>

          <div className="col">
            <h4>RESOURCES</h4>
            <ui className="list-unstyled">
             <li>Customer Stories</li>
             <li>Events</li>
             <li>Datasheets</li>
             <li>Guides</li>
             <li>Partners</li>
             <li>Product Support</li>
             <li>Webinars</li>
             <li>Research</li>
            </ui>
          </div>

          <div className="col">
            <h4>BLOG</h4>
            <ui className="list-unstyled">
              <li>Find a Job </li>
              <li>Hire Developer</li>
              <li>Industry Insight</li>
              <li>Manage developer</li>
              <li> News and Update </li>
            </ui>
          </div>

          <div className="col">
            <h4>ABOUT US</h4>
            <ui className="list-unstyled">
              <li>Contact Us </li>
              <li>company </li>
              <li>Carrer </li>
              <li>Our team </li>
              <li>Newsroom </li>
              <li>security and Comaliance </li>
              <li>Status </li>
              <i className='fab fa-facebook-f icon'></i>
              
             
            </ui>
          </div>


        </div>
        <hr />
        <div>
            
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
      </div>
    </div>
  );
}

export default Footer;