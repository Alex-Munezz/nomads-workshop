import React, { useState } from "react";
import { NavLink } from "react-router-dom";
//  import { useHistory } from "react-router-dom";
//call on login prop
function Login(){
    //  const history=useHistory()
    //  console.log(history)
 const [formData,setFormData]=useState({
    email:'',
    username:'',
    password:'',   
 })
 function handleChange(e){
    setFormData({
        ...formData,[e.target.name]:e.target.value,
    });
 }
 function handleSubmit(e){
  
    e.preventDefault();
    fetch("http://localhost:3000/Photos",{
         method:"POST", headers:{"Content-Type":"application/json",},
         body:JSON.stringify(formData),
    })
    .then((r)=>r.json())
    .then(user=>console.log(user))
//add on login prop
    //  history.push("/Home");
    
    
 }



return (
    <div>
        <div className="card">
  <div className="card-info">
    <div className="title">
        <h2>WELCOME</h2>
    <form onSubmit={handleSubmit}>
        <div className="inputbox">
        <input type="text" placeholder="email" name="email"
        value={formData.email} onChange={handleChange}></input>        
          <i></i>

        <input type="text" placeholder="username" name="username"
        value={formData.username} onChange={handleChange}></input>
          <i></i>

        <input type="text" placeholder="password" name="password"
        value={formData.password} onChange={handleChange}></input>      
        <i></i>
      </div>
        <button type="submit"  data-label="Register" class="rainbow-hover">
        <span className="sp"><NavLink to="/Gallery">Login</NavLink></span>
        </button>
    </form>
    </div>
   
  </div>
</div>
      
   


        
        

    </div>
   
);

}


export default Login;