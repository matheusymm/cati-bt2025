interface DeleteListButtonProps {
  listId: string;
  openModal?: () => void;
  deleteList?: (listId: string) => void;
}

const DeleteListButton = ({
  listId,
  openModal,
  deleteList,
}: DeleteListButtonProps) => {
  const handleClick = () => {
    if (openModal) {
      openModal();
    } else if (deleteList) {
      deleteList(listId);
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

export default DeleteListButton;
