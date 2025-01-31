interface NewListButtonProps {
  handleCreateList: () => void;
  isLoading: boolean;
}

const NewListButton = ({ handleCreateList, isLoading }: NewListButtonProps) => {
  return (
    <button
      className="flex flex-row items-center justify-between p-2 gap-2 cursor-pointer"
      onClick={() => handleCreateList()}
      disabled={isLoading}
    >
      <img
        src="/src/assets/icons/BsFillPlusCircleFill.svg"
        alt="PlusCircle"
        width={24}
        height={24}
      />
      <h6 className="text-white font-semibold text-xl">Nova lista</h6>
    </button>
  );
};

export default NewListButton;
