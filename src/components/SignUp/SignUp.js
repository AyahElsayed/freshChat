import React from 'react'
import './style.css'
import { Button } from 'react-bootstrap';
function SignUp() {
    return (
        <div>
            <div className="signup">
                <div className="container">
                    <div className=" row">
                        <div className="col-md-6">
                            <p className="subtext">
                                <span>Customer messaging software</span>
                            </p>
                            <h1>‘Wow’ your customers at their fingertips</h1>
                            <p className="desc">Freshchat helps you engage and delight your customers wherever they are - web, mobile and social messengers.</p>
                            <p>&nbsp;</p>
                            <Button variant="primary" className="button">Sign up for Free</Button>
                            <p className="subdesc">No credit card required.</p>
                        </div>
                        <div className="col-md-6">
                            <img src="./assets/demo1.JPG"></img>
                        </div>
                    </div>
                </div>
            </div>
            {/* /////////// customers logos /////////// */}
            <div className="customers-logos ">
                <div className="container">
                    <div className=" row">
                        <div className="customer-logo col-md-2"><img src="./assets/ck7agqcxj00ryglg109ro2bph-discover-1-full.png"></img></div>
                        <div className="customer-logo col-md-2"><img src="./assets/ck7agpery01o277fz5jxx3lro-decathlon-1-full.png"></img></div>
                        <div className="customer-logo col-md-2"><img src="./assets/ck7ags89800w7fxg1awgvtted-klarna-1-full.png"></img></div>
                        <div className="customer-logo col-md-2"><img src="./assets/ck7agt5x700z4fxg1001hjge1-hp-1-full.png"></img></div>
                        <div className="customer-logo col-md-2"><img src="./assets/ck7agu0au01kh7sfz0aaawlf7-getyourguide-1-full.png"></img></div>
                        <div className="customer-logo col-md-2"><img src="./assets/ck7agv4j800wuglg1nsfm1adw-makemytrip-1-full.png"></img></div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default SignUp
