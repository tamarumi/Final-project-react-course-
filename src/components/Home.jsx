import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'
import '../Posts.css'
import travel from '../images/travel.png'
const Home=()=>{
    const [post, setPost]=useState([])

    let url='https://api.npoint.io/e60f6e6cb709f8c11cff'
    useEffect(()=>{
        fetch(url)
        .then(postData=>postData.json())
        .then(newData=>setPost(newData))
    },[post])

    return(
        <>
        <div className="homePage">
        <img src={travel}></img>
        <br></br><br></br>
        <div className="ourposts">
        <h2>Our Posts</h2>
        <hr></hr>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>
        Morbi volutpat justo sed efficitur cursus. Mauris fringilla quam vitae lacinia.</p>
        </div>
        <br></br><br></br>

        <div className="Posts">
            {post.map(value=>{
                return(
                <div className="currentPost" key={value.id}>
                <img src={value.images} id="img"></img>
                <div className="text">
                <h2 >{value.title}</h2>
                <p>{value.Description}</p>
                <Link className='text-link' to={`/home/current/${value.id}`}>
                <h2 id="title">Learn More...</h2>
                </Link>
                </div>
                </div>
                )
            })}
        </div>
        </div>

        </>
    )
}

export default Home