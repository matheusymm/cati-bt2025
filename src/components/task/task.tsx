import FinishTaskButton from "../button/finishTaskButton";
import PriorityItem from "../dropdown/priorityItem";
import Date from "../date";
import { TaskProps } from "../../context/task";

interface TaskTypeProps {
  task: TaskProps;
}

const Task = ({ task }: TaskTypeProps) => {
  return (
    <button className="flex flex-col border border-liver rounded-xl w-full h-[250px] px-2 py-3 cursor-pointer">
      <div className="flex flex-row justify-between items-center">
        <PriorityItem priority={task.priority} />
        <FinishTaskButton />
      </div>
      <div className="flex flex-col min-h-32 text-white gap-1 items-start justify-start">
        <h6 className="font-semibold text-[19px]">{task.title}</h6>
        <p className="gap-1 text-base">{task.description}</p>
      </div>
      <div className="flex flex-row items-center justify-start gap-3">
        <Date date={task.createdAt} />
        <div className="flex flex-row items-center justify-center gap-2 px-2 py-1 border border-liver rounded-sm">
          <img
            src="/src/assets/icons/Clip.svg"
            alt="Clip"
            width={16}
            height={16}
          />
          <p className="text-white">3 arquivos</p>
        </div>
      </div>
    </button>
  );
};

export default Task;
