import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import AddTask from './Pages/Task/AddTask/AddTask';
import NewTask from './Pages/Task/NewTask/NewTask';
import { useEffect, useState } from 'react';
import { getTasks } from './Server/taskService';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);

  
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };
  useEffect(() => {
    const fetchTasks = async () => {
      const taskData = await getTasks();
      setTasks(taskData); // Update the task list with the fetched data
    };

    fetchTasks(); // Fetch the tasks on initial load
  }, []);
  
  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task, index) =>
      index === updatedTask.index ? updatedTask : task
    );
    setTasks(updatedTasks);
    setEditTask(null); 
  };

  const queryClient = new QueryClient({
    defaultOptions:{
      queries:{
        staleTime: 60*1000
      }
    }
  })

  
  const setEditingTask = (task, index) => {
    setEditTask({ ...task, index });
  };

  return (
    <>
    <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path='AddTask' element={<AddTask tasks={tasks} onEdit={setEditingTask} />} />
          <Route path='NewTask' element={<NewTask addTask={addTask} editTask={editTask} updateTask={updateTask} />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
    </>
  );
}

export default App;
