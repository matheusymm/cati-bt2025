import { useState, useEffect } from "react";
import { useListsContext } from "../../context/list";
import { useTasksContext } from "../../context/task";
import ListOptionsButton from "../button/listOptionsButton";
import NewTaskButton from "../button/newTaskButton";
import Task from "../task/task";
import TaskModal from "../modal/taskModal";

interface ListPageProps {
  listId: string;
}

const Page = ({ listId }: ListPageProps) => {
  const [isOpenListOptions, setIsOpenListOptions] = useState(false);
  const [isOpenTaskModal, setIsOpenTaskModal] = useState(false);
  const { fetchLists } = useListsContext();
  const { tasks, isLoadingCreate, createTask, fetchTasks } = useTasksContext();

  const handleCreateTask = async () => {
    const newTask = await createTask(
      "Nova tarefa",
      "Descrição da tarefa",
      "VERY_HIGH",
      "2025-01-31T22:12:12.210Z",
      listId
    );

    if (newTask) {
      await fetchTasks();
    }
  };

  const openTaskModal = () => {
    setIsOpenTaskModal(true);
  };

  const closeTaskModal = () => {
    setIsOpenTaskModal(false);
  };

  useEffect(() => {
    fetchLists();
  }, [tasks]);

  return (
    <div className="flex flex-col items-start justify-start min-w-[447px] max-w-[447px] min-h-[750px] h-[750px] px-4 py-6 gap-3 border border-liver rounded-xl overflow-y-auto">
      <div className="flex flex-row items-center justify-between w-full pt-2 pb-2 gap-10">
        <h6 className="text-white font-semibold text-xl">A Fazer</h6>
        <ListOptionsButton
          listId={listId}
          isOpen={isOpenListOptions}
          setIsOpen={setIsOpenListOptions}
        />
      </div>
      {tasks?.map((task) => (
        <Task key={task.id} task={task} />
      ))}
      <NewTaskButton openModal={openTaskModal} isLoading={isLoadingCreate} />
      <TaskModal isOpen={isOpenTaskModal} onRequestClose={closeTaskModal} />
    </div>
  );
};

export default Page;
