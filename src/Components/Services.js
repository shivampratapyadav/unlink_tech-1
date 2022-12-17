import React, { Component } from 'react'
import mobility from './mobility.png'

export default class Services extends Component {
  render() {
    return (
<>

<div className='three-cards center' style={{display:'flex', position:'absolute',top:'105vh',alignItems:'center'}}>


{<div className="steps-card text-center" >
<img src="https://www.terem.tech/wp-content/uploads/2020/03/800x500-Image-for-Blogs-6.png" className="card1-img-top" alt="PRODUCT ENGINEERING" style={{}}/>
<div className="card1-body">
<br/>
<h5 className="card-title-center">PRODUCT ENGINEERING</h5>
<p className="card-text-center">Realize your vision with a tailored software, delivered on-time and within your budget.</p>

</div>
</div>}

{<div className="steps-card text-center" >
<img src="https://res.cloudinary.com/people-matters/image/upload/fl_immutable_cache,w_624,h_351,q_auto,f_auto/v1601529258/1601529256.jpg" className="card2-img-top" alt="SMART TEAMS" style={{}}/>
<div className="card2-body">
<br/>
<h5 className="card-title-center">SMART TEAMS</h5>
<p className="card-text-center">Boost your development with our cross-functional experts.</p>

</div>
</div>}

{<div className="steps-card text-center" >
<img src="https://squashapps.com/wp-content/uploads/2021/10/Enterprise-Software-development-companies.png" className="card3-img-top" alt="Enterprise Solution"  style={{}}/>
<div className="card3-body">
<br/>
<h5 className="card-title-center">ENTERPRISE SOLUTION</h5>
<p className="card-text-center">Create efficiencies at a large scale delivering hyper growth.</p>

</div>
</div>}



</div>

      <div className = "Services" style = {{height:'190vh',width:'100%',position:'absolute',bckgroundColaor:'#F4FBFF', marginTop:'0%'}}>

        
  <div className="services text-center">
      <h1 className="services-heading">OUR SERVICES</h1>
      <p> Our ability to look beyond technologies and deliver innovative solutions are not the only things that set us apart. At the core of us lies a growth-oriented culture and set of impeccable values that define and guide us in this journey of perfection.</p>
  </div>
    
  <div className = "services-cards">


        {<div className="service card text-center ">
        <img src="https://img.freepik.com/free-photo/robot-handshake-human-background-futuristic-digital-age_53876-129770.jpg" className="card3-img-top" alt="Enterprise Solution"  style={{borderRadius:'100px' }}/>
        <div className="card3-body">
        <br/>
          <h5 className="card3-title">DIGITAL TRANSFORMATION</h5>
          <p className="card-text">Implement a digital-first business strategy to boost your, productivity, throughout cutting edge technology solutions.</p>

        </div>
        </div>}

      {<div className="service card text-center" >
        <img src="https://img.freepik.com/free-vector/server-room-rack-blockchain-technology-token-api-access-data-center_39422-442.jpg" className="card3-img-top" alt="Enterprise Solution"  />
        <div className="card3-body">
        <br/>
          <h5 className="card3-title">BLOCKCHAIN SOLUTIONS</h5>
          <p className="card-text">Enabling business to adopt and evolve with Blockchain and its endless possibilities to boost efficiency, security and trust.</p>

        </div>
      </div>}

      {<div className="service card text-center" >
        <img src={mobility} className="card3-img-top" alt="Enterprise Solution"  />
        <div className="card3-body">
        <br/>
          <h5 className="card3-title">MOBILITY ENABLEMENT</h5>
          <p className="card-text">Robust and experiential mobile solutions that help you grow revenue and boost brand engagement.</p>

        </div>
      </div>}

      {<div className="service card text-center" >
        <img src="https://img.freepik.com/free-vector/cloud-computing-data-streaming-concept_1017-31867.jpg" className="card3-img-top" alt="Enterprise Solution"  />
        <div className="card3-body">
        <br/>
          <h5 className="card3-title">CLOUD SERVICES</h5>
          <p className="card-text">Implement a digital-first business strategy to boost your, productivity, through cutting edge technology solutions.</p>

        </div>
      </div>}

      {<div className="service card text-center" >
        <img src="https://img.freepik.com/premium-vector/smart-home-system-concept-3d-isometric-remote-house-control-system-iot-concept_127544-1166.jpg" className="card3-img-top" alt="Enterprise Solution" />
        <div className="card3-body">
        <br/>
          <h5 className="card3-title">THE INTERNET OF THINGS</h5>
          <p className="card-text">Enabling business to adopt and evolve with Blockvain and its endless possibilities to boost efficiency, security and trust.</p>

        </div>
      </div>}

      {<div className="service card text-center" >
        <img src="https://img.freepik.com/free-vector/ai-futuristic-technology-background_53876-97391.jpg" className="card3-img-top" alt="Enterprise Solution"  />
        <div className="card3-body">
        <br/>
          <h5 className="card3-title">AI/ML</h5>
          <p className="card-text">Robust and experiential mobile solutions that help you grow revenue and boost brand engagement.</p>

        </div>
      </div>}


        </div>


  </div>

</>
    )
  }
}
