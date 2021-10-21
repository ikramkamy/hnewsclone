import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {FaCross, FaLock} from "react-icons/fa";
import { useParams } from 'react-router';
const EditePost=(props)=>{
 const { handelshow}=props;
 const update=()=>{
   
  axios.post(`/udpdatpost/${props._id}`,{
     
    text:input.text,
    article:input.article
     
    })
.then() 

}
const handelChange=(event)=>{
   
    const {name,value}=event.target;
    setInput(newInput=>{
      return  { 
        ...newInput,
        [name]:value
    
      }
    })
    }
const[input,setInput]=useState({

    article:"",
    text:""
})
console.log("INPUT",input)
return(
<div className="postCreate-container">
  <div className="lock-container"><FaLock onClick={ handelshow}/></div>
<input name="text" type="text" value={input.text} placeholder="enter your text here" onChange={handelChange}/>

<textarea className="text-area" name="article" type="text" value={input.article} placeholder="article"  onChange={handelChange}/>
<button onClick={update}>Update POST</button>
 </div>)
}
export default EditePost;