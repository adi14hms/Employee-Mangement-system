import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import Compltedtask from './CompleteTask';
import FailedTask from './FailedTask';
const TaskList = ({data}) => {
    return (  
        <div id='tasklist' className='h-[55%] flex items-center overflow-x-auto justify-start gap-5 flex-nowrap w-full py-5 mt-10'>
          {data.tasks.map((elem,idx)=>{
              if(elem.active){
                return <AcceptTask key={idx}/>
              }
              if(elem.newTask){
                return <NewTask key={idx}/>
              }
              if(elem.completed){
                return <Compltedtask key={idx}/>
              }
              if(elem.failed){
                return <FailedTask key={idx}/>
              }
              
          })}
           
           
        </div>
    );
}
 
export default TaskList;