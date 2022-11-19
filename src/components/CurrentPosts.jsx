import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
const CurrentPosts=()=>{
    const {id}=useParams()
    const [post, setPost]=useState([])
    let url=`https://api.npoint.io/e60f6e6cb709f8c11cff/${id - 1}`
    console.log(id)
    useEffect(()=>{
        fetch(url)
        .then(postData=>postData.json())
        .then(newData=>setPost(newData))
    },[])
    console.log({post})
    return(
        <>
        <h2 id="div"></h2>
        <div className="current"> 
        <div className="currentContent">
        <img src={post.images} id="currentPic"></img>
        <h2>{post.title}</h2>
        <p>{post.Description}</p>
        </div>
        <hr className="hr"></hr>
        </div>
        </>
    )
}

export default CurrentPosts