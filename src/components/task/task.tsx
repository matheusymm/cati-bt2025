import { useState } from "react";
import { TaskProps, useTasksContext } from "../../context/task";
import FinishTaskButton from "../button/finishTaskButton";
import PriorityItem from "../dropdown/priorityItem";
import DateComponent from "../date";
import TaskModal from "../modal/taskModal";

interface TaskTypeProps {
  task: TaskProps;
}

const Task = ({ task }: TaskTypeProps) => {
  const [isOpenTaskModal, setIsOpenTaskModal] = useState(false);
  const { updateTask } = useTasksContext();

  const openTaskModal = () => {
    setIsOpenTaskModal(true);
  };

  const closeTaskModal = () => {
    setIsOpenTaskModal(false);
  };

  const handleFinishTask = async () => {
    const success = await updateTask(
      task.id,
      task.title,
      task.description,
      task.priority,
      task.finishAt,
      task.listId,
      true
    );

    if (success) {
      console.log(task);
    }
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("id", task.id);
    e.dataTransfer.setData("title", task.title);
    e.dataTransfer.setData("description", task.description);
    e.dataTransfer.setData("priority", task.priority);
    e.dataTransfer.setData("finishAt", task.finishAt);
    e.dataTransfer.setData("createdAt", task.createdAt);
    e.dataTransfer.setData("updatedAt", task.updatedAt);
    e.dataTransfer.setData("listId", task.listId);
  };

  return (
    <>
      <div
        onClick={() => openTaskModal()}
        draggable
        onDragStart={handleDragStart}
        className="flex flex-col border border-liver rounded-xl w-[370px] h-[180px] md:w-full md:h-[250px] px-2 py-3 gap-3 cursor-pointer hover:bg-gradient-to-r hover:from-raising-black hover:to-onyx"
      >
        <div className="flex flex-row justify-between items-center">
          <PriorityItem priority={task.priority} />
          <div className="hidden md:block">
            <FinishTaskButton
              finishTask={handleFinishTask}
              isFinished={task.finishedAt ? true : false}
            />
          </div>
        </div>
        <div className="flex flex-col min-h-[68px] md:min-h-[105px] text-white gap-1 items-start justify-start">
          <h6 className="font-semibold text-[19px]">{task.title}</h6>
          <p className="gap-1 text-base overflow-hidden text-ellipsis">
            {task.description}
          </p>
        </div>
        <div className="flex flex-row items-center justify-start gap-3">
          <DateComponent date={task.finishAt} isEdit={false} />
          <div className="flex flex-row items-center justify-center gap-2 px-2 py-1 border border-liver rounded-sm">
            <img
              src="/src/assets/icons/Clip.svg"
              alt="Clip"
              width={16}
              height={16}
            />
            {task.files?.length ? (
              <p className="text-white">{task.files.length} arquivos</p>
            ) : (
              <p className="text-white">Sem arquivos</p>
            )}
          </div>
        </div>
      </div>
      <TaskModal
        task={task}
        isOpen={isOpenTaskModal}
        closeModal={closeTaskModal}
      />
    </>
  );
};

export default Task;
