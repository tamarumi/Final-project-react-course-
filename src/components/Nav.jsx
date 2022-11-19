import Home from "./Home"
import Login from "./Login"
import CurrentPosts from "./CurrentPosts"
import '../Posts.css'
import styled from "styled-components";
import react from '../images/react.png'
import {BrowserRouter as Router, Route, Routes, Link, useNavigate} from 'react-router-dom'

const StyledLink = styled(Link)`
color: #54595F;
font-family: "BPG ExtraSquare", sans-serif;
text-decoration: none;
padding: 20px;
`;

const Nav=()=>{
    const navigate=useNavigate()
    const logout=()=>{
        localStorage.removeItem('auth');
        navigate('/login')
    }
    return(
        <>
            <nav>
                {localStorage.getItem('auth')!=null?
                (
                <div className="navbar">
                <img src={react} id="logo"></img>   
                <StyledLink to="/home">Home</StyledLink>
                <StyledLink to="/login" onClick={logout}>Logout</StyledLink>
                </div>
                ):(
                <div className="navbar">
                 <img src={react} id="logo"></img>    
                <StyledLink to="/login">Login</StyledLink>
                </div>
                )      
                
                }
                
            </nav>
            <Routes>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/home/current/:id" element={<CurrentPosts/>}></Route>
            </Routes>     
        </>
    )
}

export default Nav