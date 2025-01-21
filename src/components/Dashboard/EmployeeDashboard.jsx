import React from 'react';
import Header from '../other/Header';
import TaskListNumbers from '../other/TaskListNUmbers';
import TaskList from '../TaskList/TaskList';
const EmployeeDashborad = ({data}) => {
    if (!data) {
        return <p>Loading...</p>;  // ✅ Prevent rendering if `data` is null
    }
    return ( 
        <div className='p-10 bg-[#1C1C1C] h-screen '>
         <Header data= {data} />
         <TaskListNumbers  data= {data} />
         <TaskList  data= {data} /> 
        </div>
     );
}
 
export default EmployeeDashborad;