import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './post.css';
import {FaPen,FaEye,FaPlus, FaTrash} from "react-icons/fa";
const Post=(props)=>{
    const {showCreate,handelDelete}=props;
  

 


return(
<div className="post-container">
<div className="wrap-options">
    <div className="item">Edite post <FaPen/></div>
    <div className="item">delete post <FaTrash onClick={handelDelete}/></div>
    <div className="item"><Link to={`/detailsPost/${props._id}`}>Details </Link><FaEye/></div>
    </div>
<div className="header-post">
<div className="item"> {props.name}</div>
<h2>{props.auteur}</h2>
<p className="text-style">{props.text}</p>
</div>

 </div>)
}
export default Post;