import React from 'react'
// import img from '../images/avatar_login.png';
import './Loginform.css';

const LoginForm = () => {
  return (
   
      <div class="container">
  <div class="brand-logo">
    
  </div>
  <div class="brand-title">Get Connected</div>
  <div class="inputs">
    <label>EMAIL</label>
    <input type="email" placeholder="example@test.com" />
    <label>PASSWORD</label>
    <input type="password" placeholder="Make a strong Password" />
    <button type="submit">LOGIN</button>
  </div>
 
</div>
    
  )
}

export default LoginForm
