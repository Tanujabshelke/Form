import React, { useState } from 'react'

function Add() {
   const [userName,setUserName] = useState("");
   const [userAdd ,setUserAdd] = useState("");
   const [userMobile ,setUserMobile] = useState("");
   const UserInfoArr = []

   const handleUserName =(e) => {
       setUserName(e.target.value);
   }
   const handleUserMobile =(e) => {
        setUserMobile(e.target.value)
   }
   const handleUserAdd =(e) => {
        setUserAdd(e.target.value);
   }
    
   const handleSubmit=() => {

       console.log("user Info ",userName ,userMobile,userAdd);
       let userObj ={userName :userName,userMobile :userMobile,userAdd :userAdd}

       window.localStorage.setItem("userInfo" , JSON.stringify(userObj));

       console.log("getItem::" , window.localStorage.getItem("userInfo"));

   }
  return (
    <div>
        <form className="add-form" onSubmit={handleSubmit}>
            <h2>Add User Info</h2>
            <div className='form-item'>

            <label>Name : </label>
            <input  type={"text"} value={userName} onChange={handleUserName}/>
            </div>
            <div className='form-item'>
                <label>Mobile : </label>
            <input  type={"text"} value={userMobile} onChange={handleUserMobile}/>
            </div>
            <div className='form-item'>
                <label>Address :</label>
            <input  type={"text"} value={userAdd} onChange={handleUserAdd}/>
            </div>
            <button type='submit' className='submit-btn'>Submit</button>
        </form>
    </div>
  )
}

export default Add