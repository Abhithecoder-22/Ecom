import React from 'react'
// import img from '../images/avatar_login.png';
import './Loginform.css';

const LoginForm = () => {

  // const [user, setUser]=useState({
  //   email:"",password:""
  // });

  //  let name,value;
    
  //  const handleinputs=(e)=>{
  //   console.log(e);
  //   e.target.name;
  //   e.target.value;
  //   setUser({...user, [name]:value})
  //  }
  return (
   
      <div class="container">
  <div class="brand-logo">
    
  </div>
  <div class="brand-title">Get Connected</div>
  <div class="inputs">
  <form method='POST'>
    <label>EMAIL</label>
    <input type="email" placeholder="example@test.com"/>
    <label>PASSWORD</label>
    <input type="password" placeholder="Make a strong Password" />
    <button type="submit">LOGIN</button>
    </form>
  </div>
 
</div>

  )
}

export default LoginForm
