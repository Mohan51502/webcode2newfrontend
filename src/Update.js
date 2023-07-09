import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';


function Update() {

  const [data ,setData] = useState([])

  const {_id} = useParams();

  
  const [inpval, setInpval] = useState({
    fname: "",
    email: "",
    role:"",
   
});


const setVal = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;

    setInpval(() => {
        return {
            ...inpval,
            [name]: value
        }
    })
};

  useEffect(()=>{
      axios.get('https://webcode2newbackend.onrender.com/getAllUser/'+ _id)
      .then(res =>setData(res.data.data))
      .catch(err =>console.log(err))

  },[])
  return (
    <div>
        <section>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Update user</h1>
                        <p style={{ textAlign: "center" }}>We are glad that you will be using Project Cloud to manage <br />
                            your tasks! We hope that you will get like it.</p>
                    </div>

                    <form>
                        <div className="form_input">
                            <label htmlFor="fname">Name</label>
                            <input type="text" onChange={setVal}  name="fname" id="fname" placeholder='Enter Your Name' value={data.fname}/>
                        </div>
                        <div className="form_input">
                            <label htmlFor="email">Email</label>
                            <input type="email"  name="email" id="email" onChange={setVal} placeholder='Enter Your Email Address'value={data.email}/>
                        </div>
                        <div className="form_input" value={data.role} onChange={setVal}>
                            <label htmlFor="role">Role     </label>
                            <br/><br/>
                            <select name="role" id="role">
    <option >select role</option>

    <option >manager</option>

    <option >employee</option>


    <option >user</option>
  </select>
                            
                        </div>
                      

                       

                        <button className='btn' >Update user</button>
                    </form>
                    <ToastContainer />
                </div>
            </section>
    </div>
  )
}

export default Update