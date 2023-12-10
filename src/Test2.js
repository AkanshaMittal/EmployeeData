import React, { useState } from "react";
import axios from "axios";
import './App.css'
import Swal from 'sweetalert2'
import ReactLoading from 'react-loading';
function Test2()
{
  const[id,setid]=useState(null);
  const[userData,setuserData]=useState(null);
  const [loader,setLoader]=useState("true")
  console.log(id)
  const handleSubmit=(e)=>{
   
     setid(e.target.value)
     if(e.target.value>10)
    {
      
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Enter id between 1 to 10!",
      });
      
    }
    
  }
  const formSubmit=(event)=>{
     event.preventDefault()
     setLoader("false");
    
    
    axios.get('https://jsonplaceholder.typicode.com/users/'+id)
    .then((res)=>{
      setLoader("true");
      setuserData(res.data)
    })
    .catch((error) => {
      setuserData(null)
      console.error("Error fetching user data:", error);
    });
  }
  const Clear=(event)=>{
   
    setuserData(null)
  }
  // console.log(userData)
  return(
     <>
      { loader==="true"?
     <div>
    
   <div className="form-container">
    <form >
      <label>
       {`Enter User ID (4573-4585)`}
      </label>
      <div>
      <input type="input" value={id>10?"Enter valid employee id":id} placeholder="Enter valid employee id" onChange={handleSubmit}/>
      </div>
      <div className="buttons">
        <button onClick={formSubmit}>Search</button>
        <button onClick={Clear}>Clear</button>
      </div>  
    </form>
    </div> 
    {userData!=null?
     <table >
      <thead>
        <tr>
          <th> Employee Name </th>
          <th> Employee Company </th>
          <th> Employee e-mailID   </th>
          <th> Employee Phone Number </th>
        </tr>
      </thead>
      
      <tbody>
        <tr>
          <td>
          {userData.name}
          </td>
         <td>
          {userData.company.name}
         </td>
         <td>
          {userData.email}
         </td>
         <td>
          {userData.phone}
         </td>
        </tr>
      </tbody>

    </table> 
    :
    // eslint-disable-next-line jsx-a11y/no-distracting-elements
    <marquee className="heading">   
please search employee by its ID 
</marquee>  
    }
  
  </div>
  : <ReactLoading type={"spin"} color={"black"} height={50} width={50} className="abc"/>}
     </>
  )

}
export default Test2;