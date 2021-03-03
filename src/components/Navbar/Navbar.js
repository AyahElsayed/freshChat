import React from 'react'
import './style.css'
function NavBar() {
    return (
        <div className="Navs">
            {/* original nav in the top */}
            <div className="Nav">
                <div className="container d-flex">
                    <span className="nav-logo">
                        <a href="/">
                            <img src="assets/logo-fworks-black.svg"></img>
                        </a>
                    </span>
                    <div className="Nav-list">
                        <ul >
                            <li>
                                <div class="dropdown">
                                    <button class="dropbtn">Products</button>
                                    <div class="dropdown-content cont">
                                        <div className="row">
                                            <div className="col-md-6 ">
                                                <div className="Experience">
                                                    <p>Customer Experience</p>
                                                    <div className="items">
                                                        <img src="./assets/logo-fdesk-black.svg"></img>
                                                        <p>A unified platform to deliver the best omnichannel customer service.</p>
                                                    </div>
                                                    <div className="items">
                                                        <img src="./assets/logo-fchat-black.svg"></img>
                                                        <p>Engage and delight your customers wherever they are - web, mobile and social messengers.</p>
                                                    </div>
                                                    <div className="items">
                                                        <img src="./assets/logo-fcaller-black.svg"></img>
                                                        <p>Reimagine your cloud-based phone system for businesses of all sizes across 90+ countries.</p>
                                                    </div>
                                                    <div className="items">
                                                        <img src="./assets/logo-fsuccess-black.svg"></img>
                                                        <p>Protect revenue, increase customer lifetime value, and strengthen customer relationships.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* //////// */}
                                            <div className="col-md-6 ">
                                                <div className="Marketing">
                                                    <p>Sales and Marketing</p>
                                                    <div className="items">
                                                        <img src="./assets/logo-fwcrm-black.svg"></img>
                                                        <p>Align your sales and marketing teams to create better experiences with an all-in-one CRM.</p>
                                                    </div>

                                                    <p>IT Service Management</p>
                                                    <div className="items">
                                                        <img src="./assets/logo-fservice-black.svg"></img>
                                                        <p>Streamline your IT service and manage internal requests from your employees.</p>
                                                    </div>
                                                    <p>HR Management</p>
                                                    <div className="items">
                                                        <img src="./assets/logo-fteam-black.svg"></img>
                                                        <p>Recruit and onboard top talent. Manage all employee details and time off in one place.</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="dropdown">
                                    <button class="dropbtn">Platform</button>
                                    <div class="dropdown-content ">
                                        <a></a>
                                       
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="dropdown">
                                    <button class="dropbtn">Company</button>
                                    <div class="dropdown-content">
                                        <a >About</a>
                                        <a >Leadership</a>
                                        <a>Board of Directors</a>
                                        <a>Investors</a>
                                        <a>Partners</a>
                                        <a>Affiliates</a>
                                        <a>Careers</a>
                                        <a>Blog</a>
                                        <a>Press</a>
                                        <a>Contact Us</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="dropdown">
                                    <button class="dropbtn">Customers</button>
                                </div>
                            </li>
                            <li>
                                <div class="dropdown">
                                    <button class="dropbtn">Suport</button>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* fixed nav in all the page */}
            <div className="superNav">
                <div className="container d-flex">
                    <span className="nav-logo">
                        <a href="/">
                            <img src="assets/logo-fchat-black.svg"></img>
                        </a>
                    </span>
                    <div className="super-Nav-list">
                        <ul >
                            <li>
                                <div class="dropdown">
                                    <button class="dropbtn">Enterprise</button>
                                </div>
                            </li>
                            <li>
                                <div class="dropdown">
                                    <button class="dropbtn">Features</button>
                                    <div class="dropdown-content">
                                        <a href="#">Messaging channels</a>
                                        <a href="#">Chatbots</a>
                                        <a href="#">Campaigns</a>
                                        <a href="#">Integrations</a>
                                        <a href="#">Explore Features</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="dropdown">
                                    <button class="dropbtn">Pricing</button>
                                </div>
                            </li>
                            <li>
                                <div class="dropdown">
                                    <button class="dropbtn">Solutions</button>
                                    <div class="dropdown-content">
                                        <a href="#">Lead Generation</a>
                                        <a href="#">Customer Engagement</a>
                                        <a href="#">Customer Support</a>

                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="dropdown">
                                    <button class="dropbtn">Resources</button>
                                    <div class="dropdown-content">
                                        <a href="#">Podcast</a>
                                        <a href="#">Case Studies</a>
                                        <a href="#">Ebooks</a>
                                        <a href="#">Blog</a>
                                        <a href="#">Product Tours</a>
                                        <a href="#">Academy</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="dropdown">
                                    <button class="dropbtn">Login</button>
                                </div>
                            </li>
                            <li>
                                <div class="dropdown">
                                    <button class="dropbtn sign-btn">Sign up for Free</button>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NavBar
