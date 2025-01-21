
import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashborad from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

const app = () => {
// useEffect(()=>{
//      setLocalStorage()
//     getLocalStorage()
// })
 
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext)
 

  

  // useEffect(()=>{
  //   if(authData){
  //     const loggedInUser = localStorage.getItem("loggedInUser")
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }

  //   }
  // },[authData])




  const handleLogin = (email,password)=>{
    if(email=='admin@me.com' && password=='123'){
          setUser({role:'admin'})
          localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }
    else if(authData && Array.isArray(authData.employees)){
        const employee = authData.employees.find((e)=> email == e.email && e.password == password)
        if(employee){
          setUser({role:'employee'})
          setLoggedInUserData(employee)
         localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
        }else {
        alert("Invalid credentials");
      }
         
    }
    else{
        alert("invalid credetials")
    }
  }

    return ( 
        <>
         {!user ? <Login handleLogin={handleLogin} /> : null}
         {user && user.role === "admin" ? <AdminDashboard /> : null}
         {user && user.role === "employee" ? <EmployeeDashborad data={loggedInUserData} /> : null}
        </>
     );
}
 
export default app;
