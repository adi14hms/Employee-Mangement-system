import React from 'react';
import Header from '../other/Header';
import AllTask from '../other/AllTask';
import CreateTask from '../other/createTask';

const AdminDashboard = ({data}) => {
    return ( 
        <div className='h-screen w-full p-7'>
            <Header data={data}/>
            <CreateTask data={data}/>
            <AllTask data={data}/>
        </div>
     );
}
 
export default AdminDashboard;