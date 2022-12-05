import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import {useForm} from 'react-router-dom';


const AddUser = () => {
    // const {reg, hSub, errors}=useForm();

 
    let navigate=useNavigate();
    const [user,setUser]=useState( {
        firstName:"",
        lastName:"",
        phoneNumber:"",
        age:"",
        });

// const [formValues, setFormValues] = useState(user);
// const [formErrors, setFormErrors] = useState({});
// const [isSubmit, setIsSubmit] = useState(false);

    const {firstName,lastName,phoneNumber,age}=user;
const OnInputChange=(e)=>{
    setUser((previous)=>(
    {...previous,[e.target.name]:e.target.value}))

                        }



const onSubmit= async e=>{

e.preventDefault();
const res=await axios.post("https://blue-journalist-bbrpv.ineuron.app:4000/user/create",user
).catch((err)=>console.log("eroor in put",err));

navigate('/');
    }



    // useEffect(() => {
    //     console.log(formErrors);
    //     if (Object.keys(formErrors).length === 0 && isSubmit) {
    //       console.log(formValues);
    //     }
    //   }, [formErrors]);


    // const validate = (values) => {
    //     const errors = {};
        
    //     if (!values.firstName) {
    //       errors.firstName = "Username is required!";
    //     }
    //     if (!values.lastName) {
    //         errors.lastName = "Username is required!";
    //       }
        
        
    //     if (!values.phoneNumber) {
    //       errors.password = "Password is required";
    //     } else if (values.phoneNumber.length < 4) {
    //       errors.password = "Password must be more than 4 characters";
    //     } else if (values.phoneNumber.length > 10) {
    //       errors.password = "Password cannot exceed more than 10 characters";
    //     }
    //     if (!values.age) {
    //         errors.age = "age is required!";
    //       } 
    //       else if (values.age.length > 150) {
    //         errors.password = "age cannot exceed more than 150 characters";
    //       }
    //     return errors;
    //   };



  return (
    <div className='container'>
        <div className='w-75 max-auto shadow p-5'>
            <h2 className='text-center mb-4'>Add A User</h2>
            <form onSubmit={e=>onSubmit(e)}>
                <div className="form-group">
                    <input type='text' className='form-control form-control-lg ' placeholder='Enter Your First Name'
                        name='firstName'
                        value={firstName}
                        onChange={e=>OnInputChange(e)}>
                    </input>
                </div>
                {firstName.length==" " && <span>first name is required</span>}
                <div className="form-group">
                    <input type="text
                    "className='form-control form-control-lg ' placeholder='Enter Your Last Name'
                        name='lastName'
                        value={lastName}
                        onChange={e=>OnInputChange(e)}>
                    </input>
                </div>
                {lastName.length==0 && <span>last name is required</span>}

                

                <div className="form-group">
                    <input type='number' className='form-control form-control-lg ' placeholder='Enter Your Number'
                        name='phoneNumber'
                        value={phoneNumber}
                        onChange={e=>OnInputChange(e)}>
                    </input>
                    
                </div>
                {phoneNumber.length>10 && <span>phone number can't more than 10 digits</span>}

                <div className="form-group">
                    <input type='number' className='form-control form-control-lg ' placeholder='Enter Your age'
                        name='age'
                        value={age}
                        onChange={e=>OnInputChange(e)}>
                    </input>
                </div>
                {age>150 && <span>Age can't more than 150</span>}

                <button className='btn btn-primary btn-block'>Add User</button>
            </form>
        </div>
    </div>
  )
}

export default AddUser