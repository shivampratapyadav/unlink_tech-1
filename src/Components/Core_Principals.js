import React, { Component } from 'react'
import laptopSymbol from './laptop.jpg'


export default class Core_Principals extends Component {
render() {
return (
<div className = "core_Principals">
  
  <div className="principal text-center">

      <h1 className="principal-heading">WHY WE ARE DIFFERENT FROM OTHERS</h1>
      <p> Automate your business processes to create efficiencies at a large scale delivering hyper-growth, backed by data-driven software solutions.</p>
      
  </div>

  <div className='principal cont'>

    <div className='principal left-cont'>

      <i className="fa-regular fa-lightbulb fa-3x"></i>
      <i className="fa-solid fa-gear fa-3x"></i>
      <i className="fa-sharp fa-solid fa-laptop-code fa-3x" ></i>
        
      <div className='modernization text-center'>MODERNIZATION</div>
      <div className='re-branding text-center'>RE-BRANDING</div>
      <div className='development text-center'>DEVELOPMENT</div>
      
    </div>

    <div className='principal right-cont text-center'>

      <h4 className='right-cont-heading text-center'>MODERNIZE LEGACY APPLICATIONS</h4>

      <div className='principal-pic-cont' >
      <img className='principal-pic' alt="principle pic" src={laptopSymbol}></img>
      </div>
        
      <p className="right-cont-paragraph">Upgrade your business-critical applications with minimal downtime to a product that can grow as your business grows with reduced maintenance costs.</p>
      
    </div>

  </div>


</div>
    )
  }
}
