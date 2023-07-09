import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
//import { LoginContext } from './ContextProvider/Context';


function Read() {



    
    const [data ,setData] = useState([])
    const {_id} = useParams();
    console.log(_id)


    function range(){


        axios.get('ttps://webcode2newbackend.onrender.com/user/getAllUser/'+ _id)
        .then(res =>setData(res.data.data))
        .catch(err =>console.log(err))
        //console.log(data)
    }

    useEffect(()=>{
        range()

    },[])
    

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
            <h3>Details of User</h3>
            <div className='mb-2'>
                <strong>Name: {data.fname}</strong>
            </div>
            <div className='mb-2'>
                <strong>Email: {data.email}</strong>
            </div>
            <div className='mb-2'>
                <strong>Role: {data.role}</strong>
            </div>
           
            <Link to="/viewusers" className='btn btn-primary ms-3'>Back</Link>
        </div>


    </div>
  )
}

export default Read