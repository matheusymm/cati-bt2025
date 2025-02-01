interface DeleteButtonProps {
  listId?: string;
  taskId?: string;
  openModal?: () => void;
  deleteList?: (listId: string) => void;
  deleteTask?: (taskId: string) => void;
}

const DeleteButton = ({
  listId,
  taskId,
  openModal,
  deleteList,
  deleteTask,
}: DeleteButtonProps) => {
  const handleClick = () => {
    if (openModal) {
      openModal();
    } else if (listId && deleteList) {
      deleteList(listId);
    } else if (taskId && deleteTask) {
      deleteTask(taskId);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="flex flex-row p-2 gap-2 cursor-pointer"
    >
      <img
        src="/src/assets/icons/AiFillDelete.svg"
        alt="AiFillDelete"
        width={16}
        height={16}
        className="text-mordant-red"
      />
      <p className="text-mordant-red text-base font-normal">Deletar</p>
    </button>
  );
};

export default DeleteButton;
