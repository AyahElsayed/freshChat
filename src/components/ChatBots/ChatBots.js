import React from 'react'
import './style.css'
function ChatBots() {
    return (
        <div className="ChatBots">
            <div className="container">
                <div className="row">
                    <div className="bots col-md-6">
                        <p><span>chatbots</span></p>
                        <h2 >Automate with bots and AI</h2>
                        <p className="subtitle">Delight customers with bots and AI that focus on intent, delight, and faster resolution.</p>
                        <a className="anchor">Learn more...</a>
                    </div>
                    {/* Animation div */}
                    <div className="col-md-6">
                        {/* This image is temporary  */}
                        <img src="./assets/demo3.JPG"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatBots
