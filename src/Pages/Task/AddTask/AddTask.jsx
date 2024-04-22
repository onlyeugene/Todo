import React from 'react';
import { useNavigate } from 'react-router-dom';
import deleted from '../../../assets/delete.png'
import edit from '../../../assets/edit.png'
import useTasks from '../../../Components/useTasks';

const AddTask = ({ tasks, onEdit }) => {
//   const navigate = useNavigate();

//   const handleEdit = (task, index) => {
//     onEdit(task, index);
//     navigate('/NewTask'); 
//   };
const {isLoading,task} = useTasks()
console.log(task,isLoading);

  return (
    <div className='py-[2rem] grid gap-[2rem]  md:px-[5rem] w-full'>
      <div className='flex justify-between items-center px-[1rem]'>
        <h1 className='text-[47px] font-semibold'>My Tasks</h1>
        <p onClick={() => navigate('/NewTask')} className='text-purple-700 font-bold text-[20px]'>
          Add New Task
        </p>
      </div>
      <ul className='pt-[1rem] grid gap-[2rem]'>
        {tasks.map((task, index) => (
          <div className='border rounded-md p-[2rem]' key={index}>
            <div className='flex justify-between border-b-[1px] pb-[1rem]'>
              <h1
                className='font-bold'
                style={{ color: task.selectedPriority === 'URGENT' ? 'red' : 'blue' }}
              >
                {task.selectedPriority}
              </h1>
              <div className='flex gap-[1rem]'>
                <div className='flex items-center gap-2 border py-[.3rem] px-[1.5rem] rounded-md bg-lime-500 border-lime-500 text-white'>
                    <div>
                        <img src={edit} alt="" className='w-[1.2rem]'/>
                    </div>
                    <h2 onClick={() => handleEdit(task, index)}>Edit</h2>
                </div>
                <div className='flex items-center gap-1 border py-[.3rem] px-[1.5rem] rounded-md bg-rose-500 border-rose-500 text-white'>
                    <div>
                        <img src={deleted} alt="" className='w-[1.6rem]'/>
                    </div>
                    <p> Delete</p>
                </div>
              </div>
            </div>
            <li>
              <h2 className='py-[1rem]'>{task.taskTitle}</h2>
              <p>{task.description}</p>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default AddTask;
