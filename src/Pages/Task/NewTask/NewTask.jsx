import React, { useState } from 'react';

const NewTask = ({ addTask }) => {
    const [taskTitle, setTaskTitle] = useState('');
    const [description, setDescription] = useState('');
    const [selectedPriority, setSelectedPriority] = useState(null);
    const [showPriorityOptions, setShowPriorityOptions] = useState(false);
    
  
    // Function to handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      addTask({ selectedPriority, taskTitle, description }); // Pass an object containing task title and description and selectedPriority.
      setTaskTitle('');
      setDescription('');
      setSelectedPriority('');
    };
    const handlePriorityClick = (priority) => {
        setSelectedPriority(priority);
        setShowPriorityOptions(false); // Hide priority options after selection
      };
    
      // Function to toggle display of priority options
      const togglePriorityOptions = () => {
        setShowPriorityOptions(!showPriorityOptions);
      };

      


  return (
    <div className='py-[2rem] grid gap-[2rem] md:px-[5rem] px-[1.2rem] w-full'>
        <div>
            <h1 className='text-[47px] font-semibold'>New Task</h1>
        </div>
        <form id='form' onSubmit={handleSubmit} action="" className=' grid gap-[2rem]'>
            <div className='relative' id='textInput'>
                <div id='msg'></div>
                <input className='border rounded-md resize-none relative md:pr-[20rem] pr-[1rem] pt-[1.5rem] md:text-[20px] pb-[.2rem] md:px-[2rem] px-[1rem] w-[18rem] xl:w-full md:w-[42rem] bg-transparent' 
                type="text" 
                value={taskTitle} 
                onChange={(e) => setTaskTitle(e.target.value)}
                 placeholder='E.g. Project Defense, Assignment....'></input>
                <label className=' md
                md:text-[20px] absolute bg-white -top-6 left-6 p-[.6rem] text-[#9c9c9c] font-semibold' htmlFor="text">Task Title</label>
            </div>
            <div className='relative'>
                <input className='border rounded-md resize-none relative md:pr-[20rem] pr-[1.5rem] pt-[1.5rem] md:text-[20px] pb-[10rem] px-[1rem] md:px-[2rem] w-[18rem] xl:w-full md:w-[42rem] bg-transparent' 
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)} placeholder='Briefly describe your task ...'></input>
                <label className=' md
                md:text-[20px] absolute bg-white -top-6 left-6 p-[.6rem] text-[#9c9c9c] font-semibold' htmlFor="text">Description</label>
            </div>

            <div className='grid justify-center text-center uppercase font-semibold text-[18px]' value={selectedPriority} onClick={togglePriorityOptions}>
                {/* <h1>Pick Priority</h1> */}
                <p>{selectedPriority ? selectedPriority : 'Pick a Priority'}</p>
                <div className=''>
                {showPriorityOptions && (
                    <div>
                        <p  onClick={() => handlePriorityClick('URGENT')}>URGENT</p>
                        <p  onClick={() => handlePriorityClick('IMPORTANT')}>IMPORTANT</p>
                    </div>
                )}
                </div>
            </div>
            
            <div className='grid justify-center items-center'>
                <button className='border border-purple-700 md:text-[20px] bg-purple-700 text-center md:w-[42rem] text-white md:px-[20rem] xl:w-full px-[7.5rem] xl:px-[46.5rem] rounded-md py-[1rem]'>Done</button>
            </div>
        </form>
    </div>
  )
}

export default NewTask