import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Viewusers() {


    
    const [data ,setData] = useState([])
    useEffect(()=>{
        axios.get('https://webcode2newbackend.onrender.com/getAllUser')
        .then(res =>setData(res.data.data))
        .catch(err =>console.log(err))

    },[])

    const navigate = useNavigate();

    const handledelete  = (_id) =>{
        const confirm = window.confirm("Would you like to Delete?");
        if(confirm){
            axios.delete(`https://webcode2newbackend.onrender.com/user/` +_id)
            .then(res => {
                navigate(`/admindash`);
              
            }).catch(err => console.log(err));
        }
    }


  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-150'>
        <h1>List of Users</h1>
        <div className='w-75 rounded bg-white border shadow p-4'>


        <div className='d-flex justify-content-end'>
        <Link to="/admindash" className='btn btn-danger addbutton'>Back</Link>

            <Link to="/adduser" className='btn btn-success'>Add +</Link>


        </div>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Action</th>


                </tr>
            </thead>
            <tbody>
                {
                    data.map((d, i) =>(
                        <tr key={i}>
                            <td>{d._id}</td>
                            <td>{d.fname}</td>
                            <td>{d.email}</td>
                            <td>{d.role}</td>
                            <td>
                                <Link to={`/read/${d._id}`} className='btn btn-sm btn-info me-2'>Read</Link>

                                {/* <Link to={`/update/${d._id}`} className='btn btn-sm btn-primary me-2'>Edit</Link> */}
                                <button  onClick={ e => handledelete(d._id)} className='btn btn-sm btn-danger'>Delete</button>
                            </td>



                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
        </div>
        
  )
}