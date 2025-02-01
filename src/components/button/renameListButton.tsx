interface RenameListButtonProps {
  openModal: () => void;
}

const RenameListButton = ({ openModal }: RenameListButtonProps) => {
  return (
    <button
      onClick={() => openModal()}
      className="flex flex-row p-2 gap-2 cursor-pointer"
    >
      <img
        src="/src/assets/icons/Pencil.svg"
        alt="Pencil"
        width={16}
        height={16}
      />
      <p className="text-white text-base font-normal">Renomear</p>
    </button>
  );
};

export default RenameListButton;
