import { useContext } from 'react'
import { Tasks } from '../../@types/Task'
import checkAllTasksCompleted from '../../helpers/checkAllTasksCompleted'
import createTask from '../../helpers/createTask'
import removeTask from '../../helpers/removeTask'
import updateTaskComplete from '../../helpers/updateTaskComplete'
import { TasksContext } from '../context/TasksContextProvider'

type TaskHook = {
  tasks: Tasks
  allTasksCompleted: boolean
  addTask: (text: string) => void
  updateTask: (id: string) => void
  deleteTask: (id: string) => void
  clearTasks: () => void
}

function useTasks(): TaskHook {
  const [tasks, setTasks] = useContext(TasksContext)

  const allTasksCompleted = checkAllTasksCompleted(tasks)

  const addTask = (text: string) => setTasks((curr) => [...curr, createTask(text)])

  const updateTask = (id: string) => setTasks(updateTaskComplete(id, tasks))

  const deleteTask = (id: string) => setTasks(removeTask(id, tasks))

  const clearTasks = () => setTasks([])

  return {
    tasks, allTasksCompleted, addTask, updateTask, deleteTask, clearTasks,
  }
}

export default useTasks
