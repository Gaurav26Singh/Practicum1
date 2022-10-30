import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './SignUp.css';
import {useState} from 'react';

AOS.init();

const SignUp = () => {
  const [isShown, setIsShown] = useState(false);
  const handleClick = event => {
    setIsShown(current => !current);
  };
  return (
    <div id='signup' data-aos="slide-right"
    data-aos-once="false" style={{left: isShown ? '-70%' : '0'}}>
       <button id='back'  onClick={handleClick}>--</button>
      <h3>SignUp</h3>
     
    <form>
      <label for="name">Name</label>
      <input type="text" id="name" class="validate"/>
      <label for="">Contact Number</label>
      <input type="text" id="cn"/>
      <label>Date of Birth</label>
      <input type="date" id="dob"/>
      <label for="">Accout Number</label>
      <input type="text" name="" id="an"/>
        <label>E-mail</label>
        <input type="email" name="" id="email"/>
        <label>Password</label>
        <input type="password" name="" id="pass"/>
        <br/>
        <div class="box">
        <button id="regis" type="button">Register</button>
      </div>
      </form>
      </div>
  )
}

export default SignUp
