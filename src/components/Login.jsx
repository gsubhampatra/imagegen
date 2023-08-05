import React from 'react'
import {Auth,Provider} from "../firebase-config"
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigator = useNavigate()
  const signIn = () =>{
   signInWithPopup(Auth,Provider)
    .then(res=>console.log("signin Successfully"), navigator("/generate"))
    .catch(err=>console.log(err))
  }
  return (
    <div className="login-page">
      <h2>Login Here</h2>
      <button onClick={signIn}  className='button' >Login with Google</button>
    </div>
  )
}

export default Login