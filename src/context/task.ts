import { Context, ContextType, createContext, useContext } from "react";

export type TaskProps = {
  id: string;
  title: string;
  description: string;
  priority: string;
  finishAt: string;
  finishedAt?: string;
  createdAt: string;
  updatedAt: string;
  listId: string;
};

export type TasksProps = {
  isLoading: boolean;
  isLoadingCreate: boolean;
  isLoadingDelete: boolean;
  isLoadingUpdate: boolean;
  tasks: TaskProps[];

  fetchTasks: () => Promise<void>;
  createTask: (
    title: string,
    description: string,
    priority: string,
    finishAt: string,
    listId: string
  ) => Promise<TaskProps | undefined>;
  deleteTask: (id: string) => Promise<boolean>;
  updateTask: (
    id: string,
    title?: string,
    description?: string,
    priority?: string,
    finishAt?: string,
    listId?: string,
    isFinished?: boolean
  ) => Promise<TaskProps | undefined>;
};

export const TasksContext = createContext({} as TasksProps);

export const useTasksContext = (): ContextType<Context<TasksProps>> => {
  return useContext(TasksContext);
};
