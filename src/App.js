import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Error from "./components/Error";
import PasswordReset from "./components/PasswordReset";
import ForgotPassword from "./components/ForgotPassword";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Routes, Route, useNavigate } from "react-router-dom"
import { useEffect, useContext, useState } from "react";
import { LoginContext } from "./components/ContextProvider/Context";
import "./App.css";
import Viewusers from "./components/viewusers";
import Adduser from "./components/Adduser";
import Read from "./Read";
import Update from "./Update";
import 'bootstrap/dist/css/bootstrap.min.css'
import AdminDashboard from "./components/AdminDashboard";
import EmployeeDashboard from "./components/EmployeeDashboard";
import Useronly from "./components/Useronly";
import ManagerDashboard from "./components/ManagerDashboard";
import EmployeeOnly from "./components/EmployeeOnly";
import Addemployee from "./components/Addemployee";





function App() {

  const [data, setData] = useState(false);

  const { logindata, setLoginData } = useContext(LoginContext);


  const history = useNavigate();

  const DashboardValid = async () => {
    let token = localStorage.getItem("usersdatatoken");

    const res = await fetch("https://webcode2new.onrender.com/validuser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      }
    });

    const data = await res.json();

    if (data.status == 400 || !data) {
      console.log("user not valid");
    } else {
      console.log("user verify");
      setLoginData(data)
      
    }
  }

  useEffect(() => {
    setTimeout(()=>{
      DashboardValid();
      setData(true)
    },2000)

  }, [])


  return (
    <>
      {
        data ? (
          <>
            <Header />

            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dash" element={<Dashboard />} />
              <Route path="/admindash" element={<AdminDashboard />} />
              <Route path="/admindash" element={<AdminDashboard />} />
              <Route path="/employeedash" element={<EmployeeDashboard />} />
              <Route path="/useronly" element={<Useronly/>} />
              <Route path="/managerdash" element={<ManagerDashboard/>} />
              <Route path="/viewemployee" element={<EmployeeOnly/>} />
              <Route path="/addemployee" element={<Addemployee/>} />






              <Route path="/password-reset" element={<PasswordReset />} />
              <Route path="/forgotpassword/:id/:token" element={<ForgotPassword />} />
              <Route path="*" element={<Error />} />
              <Route path="/adduser" element={<Adduser />} />
              <Route path="/viewusers" element={<Viewusers />} />
              <Route path="/read/:_id" element={<Read />} />
              <Route path="/update/:_id" element={<Update />} />
              <Route path="/read" element={<Read />} />





            </Routes>
          </>

        ) : <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "100vh" }}>
          Loading... &nbsp;
          <CircularProgress />
        </Box>
      }


    </>
  );
}

export default App;