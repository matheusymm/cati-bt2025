interface RenameListItemProps {
  handleRenameList: () => void;
  newName: string;
}

const RenameListItem = () => {
  return (
    <div className="flex flex-row p-2 gap-2 cursor-pointer">
      <img
        src="/src/assets/icons/Pencil.svg"
        alt="Pencil"
        width={16}
        height={16}
      />
      <p className="text-white text-base font-normal">Renomear Lista</p>
    </div>
  );
};

export default RenameListItem;
