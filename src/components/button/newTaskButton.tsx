interface NewTaskButtonProps {
  openModal: () => void;
  isLoading: boolean;
}

const NewTaskButton = ({ openModal, isLoading }: NewTaskButtonProps) => {
  return (
    <button
      className="flex flex-row items-center justify-between p-2.5 gap-2.5 cursor-pointer"
      onClick={() => openModal()}
      disabled={isLoading}
    >
      <img
        src="/src/assets/icons/BsFillPlusCircleFill.svg"
        alt="PlusCircle"
        width={20}
        height={20}
      />
      <p className="text-white font-semibold text-base">Nova tarefa</p>
    </button>
  );
};

export default NewTaskButton;
