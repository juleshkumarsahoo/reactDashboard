import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
   
    let navigate=useNavigate();
    const {id}=useParams();
    console.log("id is "+id)

    const [user,setUser]=useState( {
        firstName:"",
        lastName:"",
        phoneNumber:"",
        age:"",
        });

    const {firstName,lastName,phoneNumber,age}=user;

    const OnInputChange=(e)=>{
        setUser((previous)=>(
            {...previous,[e.target.name]:e.target.value}
        ))
    }

useEffect(()=>{
        
    sendRequest();   
    
       
},[id]);




const onSubmit= async e=>{

e.preventDefault();
const res=await axios.patch(`https://blue-journalist-bbrpv.ineuron.app:4000/user/${id}`,user).catch((err)=>console.log(err));
navigate('/');
  }

  const sendRequest=async ()=>{
        const res=await axios.get(`https://blue-journalist-bbrpv.ineuron.app:4000/user/${id}`).catch((err)=>console.log("err in edit",err));

        const data=await res.data;
       
        console.log(">>Data",data.data)
      
        setUser(data.data)
    }
  return (
    <div>
        <div className='container'>
        <div className='w-75 max-auto shadow p-5'>
            <h2 className='text-center mb-4'>Update A User</h2>
            <form onSubmit={e=>onSubmit(e)}>
                <div className="form-group">
                    <input type='text' className='form-control form-control-lg ' placeholder='Enter Your Name'
                        name='firstName'
                        value={firstName}
                        onChange={e=>OnInputChange(e)}>
                    </input>
                </div>
                <div className="form-group">
                    <input type='text' className='form-control form-control-lg ' placeholder='Enter Your Name'
                        name='lastName'
                        
                        value={lastName}
                        onChange={e=>OnInputChange(e)}>
                    </input>
                </div>
                

                <div className="form-group">
                    <input type='text' className='form-control form-control-lg ' placeholder='Enter Your phone'
                        name='phoneNumber'
                       
                        value={phoneNumber}
                        onChange={e=>OnInputChange(e)}>
                    </input>
                </div>

                <div className="form-group">
                    <input type='text' className='form-control form-control-lg ' placeholder='Enter Your age'
                        name='age'
                      
                        value={age}
                        onChange={e=>OnInputChange(e)}>
                    </input>
                </div>
                <button className='btn btn-warning btn-lg btn-block'>Update User</button>
            </form>
        </div>
    </div>
    {
        
    }
    </div>
  )
}

export default EditUser