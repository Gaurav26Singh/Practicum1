import image from './images/gif.gif';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SignUp from './SignUp';
import {useState} from 'react';
AOS.init();

function App() {
  const [isShown, setIsShown] = useState(false);
  const handleClick = event => {
    setIsShown(current => !current);
  };
  return (
   <div className='data'>
   <header>
       <div className="logo">
        <img src={"https://logoeps.com/wp-content/uploads/2013/03/linkin-park-band-vector-logo1.png"} alt="" />
       </div>
       <div className="links">
        <ul className="options">
          <li><a href="#">Home</a><div className="liner"></div></li>
          <li><a href="#">How it works</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Login</a></li>
        </ul>
       </div>
   </header>
   <div className="welcome">
    <div className="info" data-aos="slide-right"
    data-aos-once="false">
      <h1 id='head'>Payments,<br/>More Secure Now</h1>
      <p id='discription'>Now make your payment more safe & secured with our powerful facial authentication.</p>
     
        <div className="start">
        <a>
      <button id='startbtn' onClick={handleClick}>Get Started </button>
      </a>
        </div>   
    </div>
    {isShown && <SignUp />}
    <div className="mygif"><img src={image} alt="" />
    </div>
   </div>
   <h1>Abouts Us</h1>
   <div className="contributors">
    <ul className="members">
      <li id="member1">
        <h2>Gaurav Singh</h2>
      </li>
      <li id="member2">
        <h2>Shubham Kumar</h2>
      </li>
      <li id="member3">
        <h2>Atul Garg</h2>
      </li>
    </ul>
   </div>
   </div>
  );
}

export default App;
