import React, { Component } from 'react'

export default class Reviews extends Component {
render() {
return (

<div className = "reviews text-center">

        
  <h2 className='review-heading text-center'>SEE, WHAT OUR CLIENTS SAID ABOUT US!</h2>
        
  <div className="review-Container">

    <div className='image-Container'>         
      
      <img src = "https://img.etimg.com/thumb/msid-87996804,width-650,imgsize-95352,,resizemode-4,quality-100/twitters-new-ceo-parag-agrawal-.jpg" className='clientImage'></img>
      
    </div>

    <div className="review-para" >
      <p className = "clientReview">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
    </div>

  </div>
        
          
  <div className="review-name">
    <h4 className='clientName'>Param Nagarwal</h4>
  </div>
  
  <div className="review-position" >
    <h8 className = 'clientPosition'>EX-TWICTER CEO</h8>
  </div>
       
        

  <div className='previous-next-buttons'>

    <div className="previous-button">
        <button type="button" className="btn btn-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"></path>
          </svg>
        </button>
    </div>

    <div className="next-button">
      <button type="button" className="btn btn-secondary" style={{padding:"auto", alignItems:"center"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
            </svg>
      </button>
    </div>
    
  </div>

</div>
    )
  }
}
