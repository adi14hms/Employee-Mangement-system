import React from 'react';
import Header from '../other/Header';
import TaskListNumbers from '../other/TaskListNUmbers';
import TaskList from '../TaskList/TaskList';
const EmployeeDashborad = (props) => {
    
    return ( 
        <div className='p-10 bg-[#1C1C1C] h-screen '>
         <Header changeUser = {props.changeUser} data= {props.data} />
         <TaskListNumbers  data= {props.data} />
         <TaskList  data= {props.data} /> 
        </div>
     );
}
 
export default EmployeeDashborad;