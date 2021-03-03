import React from 'react'
import './style.css'
import { Button } from 'react-bootstrap';

function Messaging() {
    return (
        <div>
            {/* ////////section 1 //////////// */}
            <div className="Messaging">
                <div className="container">
                    <p className="subtitle">
                        <strong>Do more than just chat!</strong>
                    </p>
                    <h2>Messaging is the new way businesses</h2>
                    <h2>interact with customers</h2>
                </div>
            </div>
            {/* ////////// section 2 ////////////// */}
            <div className="Messaging-icons">
                <div className="container">
                    <div className="row">
                        <div className="card-icon col-md-4">
                            <img src="./assets/ck7mweifv03ljqjg1usz5z3dm-engagewhereveryouare-full.png"></img>
                            <p className="sub-title">Reach out wherever they are</p>
                            <p className="desc">Engage on web, mobile, and other social messengers.</p>
                        </div>

                        <div className="card-icon col-md-4">
                            <img src="./assets/ck7tzlcrq04il1dfzu6ykvctq-bots-1-full.png"></img>
                            <p className="sub-title">Automate with bots and AI</p>
                            <p className="desc">Assist with precise answers and conversations.</p>
                        </div>

                        <div className="card-icon col-md-4">
                            <img src="./assets/ck7pqer6b03y0n9g1x3ar1myl-target-2-full.png"></img>
                            <p className="sub-title">Engage with proactive campaigns</p>
                            <p className="desc">Send targeted outbound messages to users.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* ///////// section 3 //////////// */}
            <div className="business">
                <div className="container">
                    <h3>Messaging for businesses of all sizes.</h3>
                    <p className="subtitle">Engage customers at every interaction.</p>
                    <Button variant="primary" className="button">Sign up for Free</Button>
                </div>
            </div>
            {/* //////////// section 4 /////////// */}

            <div className="channels">
                <div className="container">
                    <div className="row">
                        {/* Anination div */}
                        <div className="animation col-md-6">
                            {/* This image is temporary  */}
                            <img src="./assets/demo2.JPG"></img>
                        </div>
                        {/* other div */}
                        <div className="connect col-md-6">
                            <p><span>Messaging channels</span></p>
                            <h2>Engage with customers, wherever they are</h2>
                            <p className="info">Connect with your customers on messaging channels like <a>WhatsApp</a>, <a>Apple Business Chat</a>, <a>Facebook Messenger</a>, etc.</p>
                            <a className="anchor">Learn more...</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Messaging
