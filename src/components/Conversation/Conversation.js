import React from 'react'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-elastic-carousel'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'
import { Button } from 'react-bootstrap';

function Conversation() {
    return (
        <div className="Conversation">
            <div className="container">
                <div className="title">
                    <p>Powering millions of conversations for businesses of all sizes</p>
                </div>
                <div className="slider">
                    <Carousel itemsToShow={1}>
                        <div className=" card">
                            <div className=" row">
                                <div className="col-md-4 icon"><ImQuotesLeft /></div>
                                <div className="col-md-4"><img src="./assets/ck7ags89800w7fxg1awgvtted-klarna-1-full.png" /></div>
                                <div className="col-md-4 icon"><ImQuotesRight /></div>
                            </div>
                            <p className="desc">“With Freshchat’s APIs, we’ve customized our chat experience and are providing personalized support to our customers.”</p>
                            <div className="line"></div>
                            <h6 className="name">Eric Bompas</h6>
                            <p className="subdesc">Product Manage <br />Klarna</p>
                        </div>

                        <div className=" card">
                            <div className=" row">
                                <div className="col-md-4 icon"><ImQuotesLeft /></div>
                                <div className="col-md-4"><img src="./assets/ck7agqcxj00ryglg109ro2bph-discover-1-one-half.png" /></div>
                                <div className="col-md-4 icon"><ImQuotesRight /></div>
                            </div>
                            <p className="desc">“With Freshchat we introduced messaging across web and mobile, making us the very first major US credit card to offer messaging without interruption - keeping the conversation history across any device”</p>
                            <div className="line"></div>
                            <h6 className="name">Jeff Stone</h6>
                            <p className="subdesc">Director, Digital Customer Service <br />Discover Cards</p>
                        </div>

                        <div className=" card">
                            <div className=" row">
                                <div className="col-md-4 icon"><ImQuotesLeft /></div>
                                <div className="col-md-4"><img src="./assets/cjna91jrj007j3sfzrivev6ao-make-my-trip-full.png" /></div>
                                <div className="col-md-4 icon"><ImQuotesRight /></div>
                            </div>
                            <p className="desc">“We’re using Freshchat to solve our customers’ needs with precision, and in real-time. It has ensured our customers receive prompt personalized experiences and has also brought in operational efficiencies that make assisted buying extremely scalable.”</p>
                            <div className="line"></div>
                            <h6 className="name">Rajesh Magow</h6>
                            <p className="subdesc">Co-Founder and CEO<br />MakeMyTrip</p>
                        </div>
                    </Carousel>
                </div>

            </div>
            <div className="customers">
                    <div className="customer">
                        <h2 >Delight your customers wherever they are.</h2>
                        <h3>Get Freshchat today</h3>
                    </div>
                    <div className="sign">
                        <Button variant="primary" className="button1">Sign up for Free</Button>
                        <p className="desc">No credit card required.</p>
                    </div>
                </div>

        </div>
    )
}

export default Conversation
