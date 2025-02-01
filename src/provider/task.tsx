import { ReactNode, useState } from "react";
import { TasksContext, TaskProps } from "../context/task";
import { api } from "../services/api";
import { useSnackbarContext } from "../context/snakbar";

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
  const { notify } = useSnackbarContext();

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
      .then(async () => {
        await fetchTasks();
        notify("Task deletada com sucesso", "success");
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
    title: string,
    description: string,
    priority: string,
    finishAt: string,
    listId: string,
    isFinished: boolean
  ) => {
    setIsLoadingUpdate(true);

    const success = await api
      .put(`/tasks/${id}`, {
        title,
        description,
        priority,
        finishAt,
        listId,
        isFinished,
      })
      .then(async () => {
        await fetchTasks();
        return true;
      })
      .catch((error) => {
        console.error(error);
        return false;
      })
      .finally(() => {
        setIsLoadingUpdate(false);
      });
    return success;
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
