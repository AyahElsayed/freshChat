import React from 'react'
import './style.css'
import { FiPhoneCall } from 'react-icons/fi';
import { GoMail } from 'react-icons/go';
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaMediumM } from 'react-icons/fa';


function ContactUs() {
    return (
        <div className="ContactUs">
            <div className="container">
                <div className="row">
                    <div className="col-md-2 Freshworks">
                        <img className="logo" src="./assets/logo-fworks-black.svg"></img>
                        <ul>
                            <li><a>Freshworks</a></li>
                            <li><a>Freshdesk</a></li>
                            <li><a>Freshservice</a></li>
                            <li><a>Freshcaller</a></li>
                            <li><a>Freshchat</a></li>
                            <li><a>Freshteam</a></li>
                            <li><a>Freshping</a></li>
                            <li><a>Freshstatus</a></li>
                            <li><a>Freshsuccess</a></li>
                            <li><a>Freshworks CRM</a></li>
                        </ul>
                    </div>

                    <div className="col-md-2 company">
                        <p>COMPANY</p>
                        <ul>
                            <li><a>About</a></li>
                            <li><a>Leadership</a></li>
                            <li><a>Board of Directors</a></li>
                            <li><a>Investors</a></li>
                            <li><a>Customers</a></li>
                            <li><a>Solutions</a></li>
                            <li><a>Affiliates</a></li>
                            <li><a>Partners</a></li>
                            <li><a>Careers</a></li>
                            <li><a>Newsroom</a></li>
                            <li><a>Contact Us</a></li>
                            <li><a>GDPR</a></li>
                        </ul>
                    </div>

                    <div className="col-md-8 row box">
                        <div className="col-md-3 Freshchat">
                            <div className="vLine"></div>
                            <p>FRESHCHAT</p>
                            <ul>
                                <li><a>What Is Live Chat?</a></li>
                                <li><a>What Is A Chatbot?</a></li>
                                <li><a>Pricing</a></li>
                                <li><a>Features</a></li>
                                <li><a>Knowledge Base</a></li>
                                <li><a>API Documentation</a></li>
                                <li><a>Blog</a></li>
                                <li><a>Product Updates</a></li>
                                <li><a>Learning Centre</a></li>
                            </ul>
                            <p>SOLUTIONS </p>
                            <ul>
                                <li><a>Lead Generation</a></li>
                                <li><a>Customer Engagement</a></li>
                                <li><a>Customer Support</a></li>
                            </ul>
                        </div>

                        <div className="col-md-3 fratures">
                            <p>TOP FEATURES</p>
                            <ul>
                                <li><a>Campaigns</a></li>
                                <li><a>Conversations</a></li>
                                <li><a>Routing</a></li>
                                <li><a>Self-Service</a></li>
                                <li><a>Team Productivity</a></li>
                                <li><a>Integrations</a></li>
                                <li><a>Mobile</a></li>
                            </ul>
                            <p>CHANNELS</p>
                            <ul>
                                <li><a>WhatsApp</a></li>
                                <li><a>Apple Business Chat</a></li>
                            </ul>
                        </div>

                        <div className="col-md-3 compare">
                            <p>COMPARE</p>
                            <ul>
                                <li><a>Intercom</a></li>
                                <li><a>Drift</a></li>
                                <li><a>Zendesk Chat</a></li>
                                <li><a>LiveChat</a></li>
                                <li><a>Olark</a></li>
                                <li><a>Zoho SalesIQ</a></li>
                                <li><a>Crisp</a></li>
                            </ul>
                            <p>INDUSTRY</p>
                            <ul>
                                <li><a>Retail and E-commerce</a></li>
                                <li><a>Travel and Hospitality</a></li>
                                <li><a>Financial Services</a></li>
                                <li><a>Education</a></li>
                            </ul>
                        </div>

                        <div className="col-md-3 users">
                            <p>EXISTING USERS</p>
                            <button className="login-btn">LOGIN</button>
                            <p>MOBILE APPS </p>
                            <img className="app" src="./assets/img-google-play.png"></img>
                            <img className="app" src="./assets/img-apple-store.png"></img>
                            <div className="social">
                                <p>CONNECT WITH US </p>
                                <div className="icons">
                                    <span className="icon fa"><FaFacebookF /></span>
                                    <span className="icon tw"><FaTwitter /></span>
                                    <span className="icon yo">< FaYoutube /></span>
                                    <span className="icon li">< FaLinkedinIn /></span>
                                    <span className="icon me"><FaMediumM /></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 botom">
                            <h6>SALES AND SUPPORT</h6> <FiPhoneCall />
                            <span>+1-866-832-3090</span> <GoMail />
                            <span>support@freshchat.com</span>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContactUs
