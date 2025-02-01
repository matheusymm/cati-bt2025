import { useEffect, useState } from "react";
import { format } from "date-fns";
import Modal from "react-modal";
import Select from "react-select";
import CloseTaskButton from "../button/closeTaskButton";
import FinishTaskButton from "../button/finishTaskButton";
import DeleteButton from "../button/deleteButton";
import PriorityItem from "../dropdown/priorityItem";
import { TaskProps, useTasksContext } from "../../context/task";
import { customStyles } from "../../utils/selectStyle";
import DeleteModal from "./deleteModal";

interface TaskModalProps {
  task: TaskProps;
  isOpen: boolean;
  closeModal: () => void;
}

const priorityOptions = [
  { value: "LOW", label: <PriorityItem priority="LOW" /> },
  { value: "MEDIUM", label: <PriorityItem priority="MEDIUM" /> },
  { value: "HIGH", label: <PriorityItem priority="HIGH" /> },
  { value: "VERY_HIGH", label: <PriorityItem priority="VERY_HIGH" /> },
];

const TaskModal = ({ task, isOpen, closeModal }: TaskModalProps) => {
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [isRenameTitle, setIsRenameTitle] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newFinishAt, setNewFinishAt] = useState("");
  const [newPriority, setNewPriority] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const { updateTask } = useTasksContext();

  const openDeleteModal = () => {
    setIsOpenDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setIsOpenDeleteModal(false);
  };

  const handleUpdateTask = async () => {
    const formattedFinishAt = format(
      new Date(newFinishAt),
      "yyyy-MM-dd'T'HH:mm:ss'Z'"
    );
    const success = await updateTask(
      task.id,
      newTitle,
      newDescription,
      newPriority,
      formattedFinishAt,
      task.listId,
      false
    );

    if (success) {
      closeModal();
    }
  };

  useEffect(() => {
    if (isOpen) {
      setNewTitle(task.title);
      setNewFinishAt(task.finishAt);
      setNewPriority(task.priority);
      setNewDescription(task.description);
    }
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      ariaHideApp={false}
      overlayClassName="fixed inset-0 flex justify-end "
      className="flex flex-col w-screen md:w-[608px] min-h-full bg-charleston-green border-l md:border-white "
    >
      <div className="flex flex-col w-full h-full justify-start items-center p-1 gap-2.5">
        <div className="flex flex-col w-[390px] md:w-[473px] h-[750px] gap-4 md:mt-10 ">
          <div className="flex flex-row justify-between items-center w-full md:mt-0 md:ml-0">
            <CloseTaskButton onClick={closeModal} />
            <FinishTaskButton />
          </div>
          <div className="flex flex-col justify-between w-full h-[114] gap-4 border-b border-liver">
            <div className="w-full h-16 justify-start py-2">
              {isRenameTitle ? (
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-[321px] h-7 text-white font-semibold text-base border border-liver rounded-sm px-2 py-1 gap-2.5"
                />
              ) : (
                <h3
                  onDoubleClick={() => setIsRenameTitle(true)}
                  className="text-white font-bold text-3xl"
                >
                  {task.title}
                </h3>
              )}
            </div>
          </div>
          <div className="flex flex-col w-full h-[84px] border-b border-liver gap-2.5">
            <div className="flex flex-row w-[321px] h-7 gap-10">
              <p className="w-[321px] text-white font-semibold text-base">
                Data de conclusão
              </p>
              <input
                type="date"
                value={newFinishAt}
                onChange={(e) => setNewFinishAt(e.target.value)}
                className="w-[126px] text-white border border-liver rounded-sm px-2 py-1 gap-2 active:border-white"
              />
            </div>
            <div className="flex flex-row w-[399px] h-9 gap-28 justify-center items-center">
              <p className="w-[85px] h-6 text-white font-semibold text-base">
                Prioridade
              </p>
              <Select
                options={priorityOptions}
                styles={customStyles}
                value={priorityOptions.find(
                  (option) => option.value === task.priority
                )}
                onChange={(e) => setNewPriority(e ? e.value : "")}
              />
            </div>
          </div>
          <div className="flex flex-col w-full h-[272px] border-b border-liver gap-4">
            <p className="text-white font-semibold text-base">Descrição</p>
            <textarea
              className="w-full h-[212px] text-white border border-liver rounded-sm px-2 py-1 gap-2.5"
              placeholder="Digite a descrição da tarefa"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-full h-[96px] border-b border-liver">
            <p className="text-white font-semibold text-base">Arquivos</p>
            <div className="flex flex-row w-full h-[72px] gap-2 px-2"></div>
          </div>
          <div className="flex flex-row justify-between w-full h-[40px]">
            <DeleteButton taskId={task.id} openModal={openDeleteModal} />
            <DeleteModal
              task={task}
              isOpen={isOpenDeleteModal}
              onRequestClose={closeDeleteModal}
            />
            <button
              onClick={handleUpdateTask}
              className="text-islamic-green cursor-pointer "
            >
              Atualizar
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default TaskModal;
