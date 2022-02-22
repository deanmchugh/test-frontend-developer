import {
  createContext, Dispatch, ReactChild, SetStateAction, useMemo, useState,
} from 'react'
import { Tasks } from '../../@types/Task'

const initalState: Tasks = [{
  id: '1',
  isCompleted: false,
  text: 'test',
}, {
  id: '2',
  isCompleted: true,
  text: 'test',
}]

type Action = Dispatch<SetStateAction<Tasks>>
type Context = [Tasks, Action]

export const TasksContext = createContext<Context>(null)

type Props = {
  children: ReactChild
}

export function TasksContextProvider({ children }: Props) {
  const [tasks, setTasks] = useState(initalState)
  const value: Context = useMemo(() => [tasks, setTasks], [tasks])

  return (
    <TasksContext.Provider value={value}>
      {children}
    </TasksContext.Provider>
  )
}
