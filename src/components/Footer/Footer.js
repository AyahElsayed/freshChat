import React from 'react'
import './style.css'
import { BiMessageRoundedDetail } from 'react-icons/bi';

function Footer() {
    return (
        <div className="Footer">
            <div className="space"></div>
            <div className="container">
                <div className="row content">
                    <div className="links col-md-8">
                        <a>Terms of Service - </a>
                        <a>Privacy Notice - </a>
                        <a>Takedown Policy - </a>
                        <a>GDPR - </a>
                        <a>Security - </a>
                        <a>Unsubscribe</a>
                    </div>
                    <div className="copyRight col-md-4">
                        <p>Copyright © Freshworks Inc. All Rights Reserved</p>
                    </div>
                </div>
            </div>


            {/*  //////// chat fixed icon //////// */}
            <div className="chaticon">
                <div className="innericon">
                    <BiMessageRoundedDetail />
                </div>
            </div>
        </div>
    )
}

export default Footer
