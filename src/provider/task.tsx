import { ReactNode, useState } from "react";
import { TasksContext, TaskProps } from "../context/task";
import { api } from "../services/api";

type TasksProviderProps = {
  children: ReactNode;
};

export const TasksProvider = ({
  children,
}: TasksProviderProps): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingCreate, setIsLoadingCreate] = useState(false);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  const [isLoadingUpdate, setIsLoadingUpdate] = useState(false);
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const fetchTasks = async () => {
    setIsLoading(true);

    await api
      .get("/tasks")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const createTask = async (
    title: string,
    description: string,
    priority: string,
    finishAt: string,
    listId: string
  ) => {
    setIsLoadingCreate(true);

    const task = await api
      .post("/tasks", { title, description, priority, finishAt, listId })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoadingCreate(false);
      });

    return task;
  };

  const deleteTask = async (id: string) => {
    setIsLoadingDelete(true);

    await api
      .delete(`/tasks/${id}`)
      .then(() => {
        return true;
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoadingDelete(false);
      });

    return false;
  };

  const updateTask = async (
    id: string,
    title?: string,
    description?: string,
    priority?: string,
    finishAt?: string,
    listId?: string,
    isFinished?: boolean
  ) => {
    setIsLoadingUpdate(true);

    await api
      .put(`/tasks/${id}`, {
        title,
        description,
        priority,
        finishAt,
        listId,
        isFinished,
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoadingUpdate(false);
      });
    return undefined;
  };

  return (
    <TasksContext.Provider
      value={{
        isLoading,
        isLoadingCreate,
        isLoadingDelete,
        isLoadingUpdate,
        tasks,
        fetchTasks,
        createTask,
        deleteTask,
        updateTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
