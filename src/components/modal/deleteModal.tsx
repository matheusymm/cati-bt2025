import Modal from "react-modal";
import { ListProps, useListsContext } from "../../context/list";
import DeleteButton from "../button/deleteButton";
import { TaskProps, useTasksContext } from "../../context/task";

interface DeleteModalProps {
  list?: ListProps;
  task?: TaskProps;
  isOpen: boolean;
  onRequestClose: () => void;
}

const DeleteModal = ({
  list,
  task,
  isOpen,
  onRequestClose,
}: DeleteModalProps) => {
  const { deleteList } = useListsContext();
  const { deleteTask } = useTasksContext();

  const handleDeleteList = async (listId: string) => {
    const success = await deleteList(listId);

    if (success) {
      onRequestClose();
    }
  };

  const handleDeleteTask = async (taskId: string) => {
    const success = await deleteTask(taskId);

    if (success) {
      onRequestClose();
    }
  };

  const handleDelete = () => {
    if (list) {
      handleDeleteList(list.id);
    } else if (task) {
      handleDeleteTask(task.id);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      overlayClassName="fixed inset-0 flex justify-center items-center"
      className="flex flex-col w-[370px] h-189px] md:w-[413px] md:h-[200px] justify-center items-start bg-charleston-green border border-white rounded-xl px-4 py-3"
    >
      <div className="flex flex-col w-full h-full justify-center items-start gap-4">
        <div className="flex justify-end w-full h-6 items-center">
          <button className="cursor-pointer mt-6" onClick={onRequestClose}>
            <img
              src="/src/assets/icons/BsFillXCircleFill.svg"
              alt="BsFillXCircleFill"
              width={24}
              height={24}
            />
          </button>
        </div>
        <h6 className="text-white font-semibold text-xl">
          {list && `Tem certeza que deseja deleta a lista ${list.title}?`}
          {task && `Tem certeza que deseja deletar a tarefa ${task.title}?`}
        </h6>
        <p className="text-white text-base">Essa ação não é reversível.</p>
        {list && <DeleteButton listId={list.id} deleteList={handleDelete} />}
        {task && <DeleteButton taskId={task.id} deleteTask={handleDelete} />}
      </div>
    </Modal>
  );
};

export default DeleteModal;
