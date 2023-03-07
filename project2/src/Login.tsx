import React, { useState } from 'react';

const Login= () => {
    const[Email,setEmail] =useState('');
    const[Password,setPassword] =useState('');
    const[emailDirty,setEmailDirty] =useState(false);
    const[passwordDirty,setPasswordDirty] =useState(false);
    const[emailError,setEmailError] =useState('Can not be empty');
    const[passwordError,setPasswordError] =useState('Can not be empty');

    const passwordHandler = (e: { target: { value: React.SetStateAction<string>; }; }) =>
    {
      setPassword(e.target.value)
      if (!e.target.value)
      {
        setPasswordError('Can not be empty')
      }
      else{
        setPasswordError('')
      }
    }
  
    const blurHandler = (e: React.FocusEvent<HTMLInputElement, Element>) => {
      switch(e.target.name){
        case 'Email':
          setEmailDirty(true)
          break
          case 'Password':
          setPasswordDirty(true)
          break
      }
    }
   const emailHandler = (e: { target: { value: React.SetStateAction<string>; }; }) =>
   {
    setEmail(e.target.value)
    const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!re.test(String(e.target.value).toLowerCase()))
  setEmailError('Email incorect')
  else{
    setEmailError('')
  }
    
   }
    return (
      <div className='Login'>
        <h2>Register Now!</h2>
        <form>
          <label>Email</label>
          {(emailDirty && emailError) && <div className="error_text"> {emailError}</div>}
          <input name="Email" type="text" onBlur={e => blurHandler(e)} onChange={e => emailHandler(e)}/>
          <label>Password</label>
          {(passwordDirty && passwordError) && <div className="error_text"> {passwordError}</div>}
          <input onChange={e => passwordHandler(e)} name="Password" type="text" onBlur={e => blurHandler(e)}/>
             <label>Alege</label>
             <select>
              <option value="Endava">Endava</option>
              <option value="Amdaris">Amdaris</option>
              <option value="Amdaris">Pentalog</option>
             </select>
             <button onClick={()=>alert("V-ați înscris!")}>Sign up</button>
  
        </form>
     { /*<Header />
      //<Text />
      <Text4 />*/
    }
    </div>
    );
  }

export default Login;