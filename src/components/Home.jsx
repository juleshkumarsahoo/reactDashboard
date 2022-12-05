import axios from 'axios';
import React from 'react'
import { useEffect ,useState} from 'react';
import { Link} from 'react-router-dom';

const Home = () => {

const [users,setUsers]=useState([]);


useEffect(()=>{

  sendRequest();

  },[]);

  const sendRequest=async()=>{
    const res=await axios.get("https://blue-journalist-bbrpv.ineuron.app:4000/users").catch((err)=>console.log(err));
    const data=await res.data;
   
    console.log(">>Data",data.data)
  
    setUsers(data.data)
  
  }

const deleteUser=async (id)=>{
  console.log("id is",id)
const res=await axios.delete(`https://blue-journalist-bbrpv.ineuron.app:4000/user/${id}`).catch((err)=>console.log(err));
const data=await res.data;

sendRequest()
}

return (
    <div>
<table class="table  table-striped table-hover">
  <thead>
    <tr key="{etem}" className='bg-dark text-white' >
      <th scope="col">#</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Age</th>
      <th scope="col"><Link className='btn btn-primary' to='/user/create'>Add User</Link></th>


    </tr>
  </thead>
  <tbody>
   {
    users.map((item,ind)=>(
        <tr key={ind}>
            <th scope="row">{ind+1}</th>
            <td >{item.firstName}</td>
            <td >{item.lastName}</td>
            <td >{item.phoneNumber}</td>
            <td >{item.age}</td>
            <td >
               <Link className='btn btn-primary mx-2' to={`/user/${item._id}`}><i class="fa-solid fa-pen"></i></Link>
               <Link className='btn btn-danger mx-2' onClick={()=>deleteUser(item._id)}> <i class="fa-solid fa-trash"></i></Link>
             

            </td>
           

        </tr>
    ))
   }
    {users.length<=0 && <h1>No Data Found</h1>}
  </tbody>
</table>

    </div>
  )
}

export default Home