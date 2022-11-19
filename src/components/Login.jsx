import { useState, useEffect } from "react"
import {useNavigate} from 'react-router-dom'
import '../Posts.css'
import loginpic from "../images/loginpic.jpeg"
const Login=()=>{
    const [auth, setauth]=useState(null)
    const [username, setusername]= useState('')
    const [password, setpassword]= useState('')
    const [error, setError]=useState(false)
    const [email, setEmail]=useState([])
    const navigate=useNavigate()
    useEffect(() => {
       fetch('https://jsonplaceholder.typicode.com/users')
      .then(rensponse=>rensponse.json())
      .then(data=>setEmail(data))
    }, []);
    const loginHandler = (e) => {
      e.preventDefault()
      setauth(localStorage.setItem('auth', true))
      if (email.find(item => item.email === username)) {
        navigate('/home'); 
      }else{
        setError(true);
      }
    }
    return(
    <> 
    <div className="login">
      <div className="form">
       <form action="" onSubmit={loginHandler}>
        <label for="username">Username</label> <br></br>
        <input type="text"  onChange={(e)=> setusername(e.currentTarget.value)} value={username}/><br></br>
        <label for="password">Password</label> <br></br>
        <input type="password"  onChange={(e)=> setpassword(e.currentTarget.value)} value={password}/>
        <br></br>
        <button type="submit" id="btn">Log In</button>
       </form>
       <img src={loginpic} id="loginpic"></img>
       </div>
       </div>
        { error && (
        <p id="error">ასეთი მომხმარებელი არ არსებობს</p>
        )}
        
      
      <hr className="hr"></hr>
    </>
    )
}

export default Login