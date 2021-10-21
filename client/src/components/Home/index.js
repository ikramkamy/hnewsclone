import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Post from './Posts';
import CreatePost from './Posts/CreatPost';
import {FaPlus} from "react-icons/fa";
import './home.css';
const Home=(props)=>{
    const[show,setShow]=useState(false)
const[post,setPost]=useState([{
    name:"technology",
    auteur:"ikram",
    text:"tech is good" 
}]);
const showCreate=()=>{
    setShow(!show)  
}
 useEffect(() => {
    const expensesListResp = async () => {
      await axios.get(`/getposts`)
      .then(response =>setPost(response.data))
   }
    expensesListResp();
  });
   
    const handelDelete=(e)=>{
      alert("are your sur you want to delete poste?")
    axios.delete(`/deletpost/${e._id}`,)
      .then()
      }


return(
<div className="home">
<h1>Welcome to our platform</h1>
<h1>All post</h1>
<div className="create" onClick={showCreate}>Create <FaPlus/></div>
{post.map((e)=><Post _id={e._id} name={e.name} text={e.text} auteur={e.auteur} showCreate={showCreate} handelDelete={(()=>handelDelete(e))}/>)}


{show &&( <CreatePost showCreate={showCreate}/>)}
 </div>)
}
export default Home;