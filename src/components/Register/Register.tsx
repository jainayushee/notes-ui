import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import './Register.css'

export default function Register() {
    const [name, setName] = useState("");
    const [username, setusername] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    // const navigate = useNavigate();
  
    const submit = (e: { preventDefault: () => void; }) =>{
      e.preventDefault();
      const user = {
        name: name,
        userName: username,
        email: email,
        password: password
      }
      console.log(user);
      
  
    //   NoteDataService.registerUser(user).then(()=> {
    //     navigate("/login")
    //   })
      
    }
  
    return (
      <div className='register-wrapper'>
        <div className="form">
          <input className='form-field' type="text" name='name' placeholder='name' onChange={(e)=> setName(e.target.value)}/>
          <br/>
          <input type="text" name='username' placeholder='username' onChange={(e)=> setusername(e.target.value)} />
          <br/>
          <input type="text" name="email" id="email" placeholder='email' onChange={(e)=> setemail(e.target.value)}/>
          <br/>
          <input type="text" name='pass' placeholder='password' onChange={(e)=> setpassword(e.target.value)}/>
          <br/>
          <button type='submit' onClick={submit}>Register</button>
      </div>
      </div>
    )
}
