import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './post.css';
import {FaPen,FaEye,FaPlus} from "react-icons/fa";
import { useParams } from 'react-router';
import EditePost from './Updatposts'; 

const DetailsPost=(props)=>{
 const {_id}=useParams();
 const[showupdate,setShowupdate]=useState(false)
 const handelshow=()=>{
  setShowupdate(!showupdate)
 }
    const {showCreate}=props;
const[post,setPost]=useState({
  name:"f",
  auteur:"ff",
  article:"",
  text:"f"
});
  useEffect(() => {
    const expensesListResp = async () => {
      await axios.get(`/gepostbyID/${_id}`)
      .then(response =>setPost(response.data.data))
   console.log("post",post) }
    expensesListResp();
  },[]);
   


return(
<div className="post-container">
<div className="details-post">
  <div className="item-details">
    <div className="item">{post.auteur}</div>
    <div className="item">Subject: {post.name}</div>
    <div className="item" onClick={handelshow}>Edite post <FaPen/></div>
    </div>
    <div className="item-details">
    <p className="text-style">{post.text}</p>
    <div className="item">Full text: {post.article}</div>
    </div>
    </div>
    
{showupdate &&(<EditePost _id={_id}   handelshow={handelshow} />)}

 </div>)
}
export default DetailsPost;