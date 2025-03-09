import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./login.css"

const Login = () => {
  let [x,setx]=useState({email:"" ,password:"" });
    let nav=useNavigate()

        let getData=(e)=>{
            setx({...x,[e.target.name]:e.target.value})
        }
        let show =()=>{
            if (x.email == "a@a.a" && x.password == "123"){
              nav("/nav2")}
            else {
              alert("invalid user ")
            }
        }
        let register =()=>{
          nav("/register")
        }
        let forgot =()=>{
          nav("/forgot")
        }
    
  return (
    <>
    <fieldset className='loginForm'>
    <h2> LOGIN </h2>
    <h4>Email :</h4> <input onChange={getData} type="email" name='email'/> <br /> <br />
    <h4>Password :</h4> <input onChange={getData} type="password" name='password'/> <br /> 
    

    <button onClick={show}> LOGIN</button> <br /> 
    <button onClick={register}>  REGISTER  </button> <br />
    <button onClick={forgot}> FORGOT </button>
    </fieldset>

    </>
  )
}

export default Login