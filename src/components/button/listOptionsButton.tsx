import RenameListItem from "../dropdown/renameListItem";
import DeleteListItem from "../dropdown/deleteListItem";

interface ListOptionsButtonProps {
  listId: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const ListOptionsButton = ({
  listId,
  isOpen,
  setIsOpen,
}: ListOptionsButtonProps) => {
  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        <img
          src="/src/assets/icons/ListOptionsButton.svg"
          alt="ListOptionsButton"
          width={32}
          height={32}
        />
      </button>
      {isOpen ? (
        <ul className="absolute right-0 w-48 bg-charleston-green border border-liver rounded-lg shadow-lg">
          <li>
            <RenameListItem />
          </li>
          <li>
            <DeleteListItem listId={listId} />
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default ListOptionsButton;
