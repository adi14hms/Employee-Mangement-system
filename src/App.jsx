import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashborad from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
    const [user, setUser] = useState(null);
    const [loggedInUserData, setLoggedInUserData] = useState(null);
    
    // ✅ Ensure `userData` always has employees as an array
    const [userData, setUserData] = useContext(AuthContext) || { employees: [] };

    useEffect(() => {
        const loggedInUser = localStorage.getItem('loggedInUser');
        if (loggedInUser) {
            const userData = JSON.parse(loggedInUser);
            setUser(userData.role);
            setLoggedInUserData(userData.data || null);
        }
    }, []);

    const handleLogin = (email, password) => {
        if (email === "admin@me.com" && password === "123") {
            setUser("admin");
            localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
        } 
        else if (userData && Array.isArray(userData.employees)) {  // ✅ Check if `employees` exist
            const employee = userData.employees.find((e) => e.email === email && e.password === password);

            if (employee) {
                setUser("employee");
                setLoggedInUserData(employee);
                localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data: employee }));
            } else {
                alert("Invalid credentials");
            }
        } 
        else {
            alert("Invalid credentials");
        }
    };

    return ( 
        <>
            {!user ? <Login handleLogin={handleLogin} /> : null}
            {user === "admin" ? <AdminDashboard changeUser={setUser} /> : null}
            {user === "employee" ? <EmployeeDashborad changeUser={setUser} data={loggedInUserData} /> : null}
        </>
    );
};

export default App;
