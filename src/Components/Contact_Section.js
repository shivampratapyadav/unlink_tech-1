import React, { Component } from 'react'

export default class Contact_Section extends Component {
  render() {
    return (

<div className = "contact_Section">
        
  <div className="mailUs-cont">
    
    <div className="left-cont-mail" >
      <h4 style={{marginTop:"1%"}}>WORK WITH US</h4>
      <p style={{marginTop:'-1.5%'}}>Let us understand your business objectives, set up initial milestones, and plan your software project.</p>
    </div>

    <div className="right-cont-mail">
      
      <i className="fa-solid fa-envelope-open-text fa-2x"></i>
      
      <div style={{margin:"auto",height:"90%",width:"50%"}}>
      <input type="text" defaultValue="Enter Email Address" style={{height:"80%",width:"100%",marginTop:"1.5%",border:"none"}}/>
      </div>
      
      <div className="right-cont-getStarted text-center">
      GET STARTED
      </div>

    </div>

  </div>
  

  <div className="table-cont-box text-center">
      <table className="table-cont" >
        <thead>
          <tr>
            <th scope="col">EXPERTISE</th>
            <th scope="col">WHO WE ARE</th>
            <th scope="col">RESOURCES</th>
            <th scope="col">TECHNOLOGY</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>AI/ML</td>
            <td>About Us</td>
            <td>Blog</td>
            <td>Cloud and DevOps</td>
          </tr>
          <tr>
            <td>Mobile Application</td>
            <td>Why Choose Us</td>
            <td>Portfolio</td>
            <td>Big Data and Analytics</td>
          </tr>
          <tr>
            <td>Web Development</td>
            <td>Core Team</td>
            <td>Build your Team</td>
            <td>Internet Of Things</td>
          </tr>
          <tr>
            <td>Software Quality Assurance</td>
            <td>Technology</td>
            <td>Start Your Project</td>
            <td>Cyber Security</td>
          </tr>
          <tr>
            <td>Software project Management</td>
            <td>Sitemap</td>
            <td>Contact Us</td>
            <td>UI and UX Design</td>
          </tr>
        </tbody>
      </table>
  </div>

  <div style={{width:"80%",margin:"auto",marginTop:"3%",marginBottom:"3%",background:'white'}} ><hr/></div> 

  <div className="copyRight-cont">
    
    <div className='l-copyRight-cont' >
      <h6><b>UNLINK</b> TECHNOLOGIES</h6>
      <p style={{fontSize:"12px"}}>&#169; Copyright 2022 | All Rigts Reserved By Unlink Technologies.</p>
      <p style={{fontSize:"12px"}}><u>Privacy Policy</u></p>
    </div>

    <div className='r-copyRight-cont'>
          
      <div>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-google"></i>
        </a>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-github"></i>
        </a>
      </div>

    </div> 

  </div>

</div>
    )
  }
}
