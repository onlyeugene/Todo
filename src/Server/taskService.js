import supabase from "./supabase"; // Assuming supabase.js exists in the same directory

// Function to fetch all tasks from Supabase
export async function getTasks() {
  const { data, error } = await supabase.from('Task').select('*'); // Ensure 'TASKS' is the correct table name
  if (error) {
    throw new Error('Failed to fetch tasks from Supabase');
  }
  return data;
}


// Function to create a new task in Supabase
export async function createTask(newTask) {
  const { data, error } = await supabase.from('Task').insert([newTask]);
  if (error) {
    throw new Error('Failed to create task in Supabase');
  }
  return data;
}

// Function to update an existing task in Supabase by ID
export async function updateTask(id, updatedTask) {
  const { data, error } = await supabase
    .from('Task')
    .update(updatedTask)
    .eq('id', id);

  if (error) {
    throw new Error('Failed to update task in Supabase');
  }
  return data;
}

// Function to delete a task from Supabase by ID
export async function deleteTask(id) {
  const { error } = await supabase
    .from('Task')
    .delete()
    .eq('id', id);

  if (error) {
    throw new Error('Failed to delete task from Supabase');
  }
}
