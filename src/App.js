import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap'
import NavBar from './components/Navbar/Navbar'
import SignUp from './components/SignUp/SignUp'
import Messaging from './components/Messaging/Messaging'
import ChatBots from './components/ChatBots/ChatBots'
import Campaigns from './components/Campaigns/Campaigns'
import Platform from './components/Platform/Platform'
import Connect from './components/Connect/Connect'
import Conversation from './components/Conversation/Conversation'
import ContactUs from './components/ContactUs/ContactUs'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <div className="App">
      <NavBar />
      <SignUp />
      <Messaging />
      <ChatBots />
      <Campaigns />
      <Platform />
      <Connect />
      <Conversation />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
