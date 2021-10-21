import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './post.css';
import {FaPen,FaEye,FaPlus} from "react-icons/fa";
const DetailsPost=(props)=>{
    const {showCreate}=props;
  const [open,setOpen]=useState([]);
  const [show,setShow]=useState(false);
  useEffect(() => {
    const expensesListResp = async () => {
      await axios.get(`/api/notes`)
      .then(response =>setOpen(response.data))
   }
    expensesListResp();
  });
    console.log("Heure de travail", open)
    const handelDelete=(user)=>{
    axios.delete(`/api/utilisateurs/${user._id}`,)
      .then()
      }


return(
<div className="post-container">
<div className="header-post">
    <div className="item" onClick={showCreate}>Create <FaPlus/></div>

    <div className="item">Edite post <FaPen/></div>
    <div className="item">delete post </div>
    <div className="item">Full text: {props.article}</div>
    </div>
    <div className="item"> {props.name}</div>
<h2>{props.auteur}</h2>
<p className="text-style">{props.text}</p>
 </div>)
}
export default DetailsPost;