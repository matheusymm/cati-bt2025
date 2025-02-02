import { useState, useEffect } from "react";
import { format } from "date-fns";
import { ListProps, useListsContext } from "../../context/list";
import { TaskProps, useTasksContext } from "../../context/task";
import ListOptionsButton from "../button/listOptionsButton";
import NewTaskButton from "../button/newTaskButton";
import Task from "../task/task";

interface ListPageProps {
  list: ListProps;
}

const Page = ({ list }: ListPageProps) => {
  const [isOpenListOptions, setIsOpenListOptions] = useState(false);
  const [task, setTask] = useState<TaskProps | null>();
  const { fetchLists } = useListsContext();
  const { tasks, isLoadingCreate, createTask, fetchTasks, updateTask } =
    useTasksContext();

  const handleCreateTask = async () => {
    const finishAt = format(Date.now(), "yyyy-MM-dd'T'HH:mm:ss'Z'");
    const newTask = await createTask(
      "Nova tarefa",
      "Descrição da tarefa",
      "LOW",
      finishAt,
      list.id
    );

    if (newTask) {
      setTask(newTask);
      await fetchTasks();
    }
  };

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("id");
    const title = e.dataTransfer.getData("title");
    const description = e.dataTransfer.getData("description");
    const priority = e.dataTransfer.getData("priority");
    const finishAt = e.dataTransfer.getData("finishAt");
    const listId = e.dataTransfer.getData("listId");

    if (listId === list.id) return;

    await updateTask(
      id,
      title,
      description,
      priority,
      finishAt,
      list.id,
      false
    );
  };

  useEffect(() => {
    fetchLists();
  }, [tasks]);

  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      className="flex flex-col items-start justify-start min-w-100 max-w-100 min-h-[780px] h-[780px] md:min-w-[447px] md:max-w-[447px] md:min-h-[750px] md:h-[750px] px-4 py-6 gap-3 border border-liver rounded-xl overflow-y-auto"
    >
      <div className="flex flex-row items-center justify-between w-full pt-2 pb-2 gap-10">
        <h6 className="text-white font-semibold text-xl">{list.title}</h6>
        <ListOptionsButton
          list={list}
          isOpen={isOpenListOptions}
          setIsOpen={setIsOpenListOptions}
        />
      </div>
      {tasks
        ? tasks
            .filter((task) => task.listId === list.id)
            .map((task) => <Task key={task.id} task={task} />)
        : null}
      <NewTaskButton
        handleCreateTask={handleCreateTask}
        isLoading={isLoadingCreate}
      />
    </div>
  );
};

export default Page;
