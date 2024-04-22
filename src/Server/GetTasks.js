import supabase from "./supabase";

export async function getTasks(){
 
const { data: Task, error } = await supabase
    .from('Task')
    .select('*')
if(error){
 throw new Error("couldnt find tasks")
}
console.log(Task)
return Task
}
export async function createTasks(newTask){
 
const { data, error } = await supabase
  .from("Task")
  .insert([newTask])
  .select();
  
if (error) {
  throw new Error("couldnt create tasks");
}
return data
}
export async function editTasks(newTask,id){

const { data, error } = await supabase
  .from("Task")
  .update(newTask)
  .eq("id", id)
  .select();

if (error) {
  throw new Error("couldnt edit tasks");
}
return data
}
export async function deleteTask(id){
const { error } = await supabase
  .from("Task")
  .delete()
  .eq("id",id);

if (error) {
  throw new Error("couldnt delete tasks");
}

}


function test({item,number}){
console.log(item,number)
}
test({item:"williams",number:1})