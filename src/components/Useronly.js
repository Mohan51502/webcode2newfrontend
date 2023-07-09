import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Useronly() {


    
    const [data ,setData] = useState([])
    useEffect(()=>{
        axios.get('https://webcode2newbackend.onrender.com/getUseronly')
        .then(res =>setData(res.data.data))
        .catch(err =>console.log(err))

    },[])

    const navigate = useNavigate();

    

  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-150'>
        <h1>List of Users</h1>
        <div className='w-75 rounded bg-white border shadow p-4'>


        <div className='d-flex justify-content-end'>
        {/* <Link to="/employeedash" className='btn btn-danger addbutton'>Back</Link> */}



        </div>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>


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
                         



                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
        </div>
        
  )
}