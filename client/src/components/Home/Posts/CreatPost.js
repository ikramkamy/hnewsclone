import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {FaCross, FaLock} from "react-icons/fa";
const CreatePost=(props)=>{
 const {showCreate}=props;
  const create=()=>{
   const expensesListResp = async () => {
     await axios.post("/createpost",input)
      .then(setInput({
        name:"",
        auteur:"",
        text:"",
        article:""

      }))
   } 
   expensesListResp();
   
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

    name:"",
    auteur:"",
    text:""
})
console.log("INPUT",input)
return(
<div className="postCreate-container">
  <div className="lock-container"><FaLock onClick={showCreate}/></div>
<input name="text" type="text" value={input.text} placeholder="enter your text here" onChange={handelChange}/>
<input name="auteur" type="text" value={input.auteur} placeholder=" auther's name" onChange={handelChange} />
<input className="text-input" name="name" type="text" value={input.name} placeholder="the subject"  onChange={handelChange}/>
<textarea className="text-area" name="article" type="text" value={input.article} placeholder="article"  onChange={handelChange}/>
<button onClick={create}>ADD POST </button>
 </div>)
}
export default CreatePost;