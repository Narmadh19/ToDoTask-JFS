import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Sigin  (){
    const [name,setName]=useState("");
    const [pwd,setPwd]=useState("");

    var un="mybatch";
    var pd="happy@143";

    const navigate=useNavigate();

    function check(){
         if((un===name ) &&(pd===pwd)){
             alert("Login Successful");
             navigate('/tasks');
        }else{
        alert("Invalid username or password");
        }
        
    }
  return (
    <div>
        <h1 >
            <center>
                LOGIN PAGE
                </center>
            </h1>
        <form>
            <center>
                <h3>Username:</h3>
                <input type="text" value={name} placeholder="Enter Username" onChange={(e)=>setName(e.target.value)}></input>
                <h3>Password:</h3>
                <input type="password" value={pwd} placeholder='Enter Password' onChange={(e)=>setPwd(e.target.value)}></input>
                <button onClick={check}>LOGIN</button>
            </center>
        </form>
    </div>
  )
}

export default Sigin;