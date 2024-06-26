import { useQuery } from "@tanstack/react-query"
import { getTasks } from "../Server/GetTasks";

function useTasks() {
const { isLoading, data: task=[] } = useQuery({
  queryKey: ["task"],
  queryFn: getTasks,
});
return {isLoading,task}
}

export default useTasks