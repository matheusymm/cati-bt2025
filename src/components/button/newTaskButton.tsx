interface NewTaskButtonProps {
  handleCreateTask: () => void;
  isLoading: boolean;
}

const NewTaskButton = ({ handleCreateTask, isLoading }: NewTaskButtonProps) => {
  return (
    <button
      className="flex flex-row items-center justify-between p-2.5 gap-2.5 cursor-pointer hover:bg-liver rounded-[4px] w-[152px] h-[44px]"
      onClick={() => handleCreateTask()}
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
