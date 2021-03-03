import React from 'react'
import './style.css'

function Campaigns() {
    return (
        <div className="Campaigns">
            <div className="container">
                <div className="row">
                    {/* Animation div */}
                    <div className="col-md-6">
                        {/* This image is temporary  */}
                        <img src="./assets/demo4.JPG"></img>
                    </div>
                    <div className="Proactive col-md-6">
                        <p><span>Proactive campaigns</span></p>
                        <h2 >Reach out to customers before they reach you</h2>
                        <p className="subtitle">Send proactive campaigns to users based on user behavior, actions and other conditions.</p>
                        <a className="anchor">Learn more...</a>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Campaigns
