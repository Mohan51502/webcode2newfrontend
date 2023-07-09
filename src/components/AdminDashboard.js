import React, { useContext, useEffect ,useState} from 'react'
import { LoginContext } from './ContextProvider/Context';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import BackgroundAnimate from './BackgroundAnimate';
import InputShortener from './InputShortener';
import LinkResult from './LinkResult';
import { Link ,useNavigate} from "react-router-dom"

//import { Button } from '@mui/material';

const AdminDashboard = () => {

    const { logindata, setLoginData } = useContext(LoginContext);

    const [data, setData] = useState(false);


    const history = useNavigate();

    const DashboardValid = async () => {
        let token = localStorage.getItem("usersdatatoken");

        const res = await fetch("https://webcode2newbackend.onrender.com/validuser", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        });

        const data = await res.json();

        if (data.status === 400 || !data) {
            history("*");
        } else {
            console.log("user verify");
            setLoginData(data)
            history("/admindash");
        }
    }


    useEffect(() => {
        setTimeout(() => {
            DashboardValid();
            setData(true)
        }, 2000)

    }, [])

    const [inputValue, setInputValue] = useState("");

    //const addUserdata = async (e) => {

        // const res = await fetch(`https://webcode2new.onrender.com/getAllUser`, {
        //     method: "GET",
        //     headers: {
        //         "Content-Type": "application/json"
        //     }
        // });

        // const data = await res.json()

        // if (data.status == 201) {
        //     console.log("user valid")
        // } else {
        //     console.log(data);
        // }
        
    //}
    //var value = logindata.ValidUserOne.role
    //console.log(value)

    return (
        <>
            {
                data ? <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <img src="./man.png" style={{ width: "200px", marginTop: 20 }} alt="" />
                    <h1>User Email:{logindata ? logindata.ValidUserOne.email : ""}</h1>
                    <h1>User Name:{logindata ? logindata.ValidUserOne.fname : ""}</h1>
                    <h1>User Role:{logindata ? logindata.ValidUserOne.role : ""}</h1>
                    <Link to="/viewusers" className='btn btn-danger'>Viewusers</Link>

                    <div className="container">
      <InputShortener setInputValue={setInputValue} />
      <BackgroundAnimate />
      <LinkResult inputValue={inputValue} />
      



    </div>
   


{/* <p> <NavLink to="/adduser" className='btn btn-success'>Create User</NavLink> </p> */}
<br/>

{/* <p> <NavLink to="/viewusers">View Users</NavLink> </p> */}


{/* <button className='btn' onClick={addUserdata}>view user</button> */}


{/* <p> <div className='d-flex justify-content-end'>
    <Link to={`/viewusers`} disabled={{} } className='btn btn-primary'>Add User</Link></div> </p> */}





                </div> 
                
                
                
                : <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "100vh" }}>
                    Loading... &nbsp;
                    <CircularProgress />
                </Box>
            }

        </>

    )
}

export default AdminDashboard