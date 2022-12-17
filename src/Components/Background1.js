import React, { Component } from 'react'
import symbol from './unlink.jpg'
export default class Background1 extends Component {
  render() {
    return (
      <div className = 'Top-Component' style={{height:'110vh'}}>

        <div className = 'bg-img' >
        
            <img className ='nav-Symbol' src={symbol} alt = "Symbol" width="70" height = "70"/>
        
            <div className="container">
                <div className="topnav">
                    <a href="#about">ABOUT UNLINK</a>
                    <a href="#services">SERVICES</a>
                    <a href="#expertise">EXPERTISE</a>
                    <a href="#careers">CAREERS</a>
                    <a href="#testimonials">TESTIMONIALS</a>
                    <a href="#contact">CONTACT</a>
                </div>
            </div>
            
            <div className = 'intro'>
                <h1 className='intro-heading1'>YOUR </h1>
                <h1> <span style = {{color: "white"}}>TECHNOLOGY</span> <span style = {{color: "#bec1d0"}}>PARTNER</span> </h1>
                
                
                <p style={{color:"#F5F1F0"}}>
                    We assist companies in elevating their notion of what's<br/>
                    possible when our limitless TECHNOLOGY expertise is<br/>
                    interfaced with an inquisitive understanding of their<br/>
                    business goals. Let's talk about how we can create<br/>
                    something awesome together.
                </p>
            </div>
            <div className="Consultation">
            <button className="button-Consultation" ><span>Click </span></button>
            <p className = "text-Consultation">SET UP CONSULTATION</p>
            </div>
        </div>

       

     </div>
    )
  }
}
