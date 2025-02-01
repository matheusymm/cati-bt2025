import RenameListItem from "../dropdown/renameListItem";
import DeleteListItem from "../dropdown/deleteListItem";
import { ListProps } from "../../context/list";

interface ListOptionsButtonProps {
  list: ListProps;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const ListOptionsButton = ({
  list,
  isOpen,
  setIsOpen,
}: ListOptionsButtonProps) => {
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer hover:bg-liver active:bg-dark-charcoal rounded-[2px] p-1"
      >
        <img
          src="/src/assets/icons/ListOptionsButton.svg"
          alt="ListOptionsButton"
          width={32}
          height={32}
        />
      </button>
      {isOpen ? (
        <ul className="absolute right-0 w-[126px] h-24 bg-charleston-green border-[0.5px] px-[1px] py-2 border-liver rounded-[4px]">
          <li>
            <RenameListItem list={list} />
          </li>
          <li>
            <DeleteListItem list={list} />
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default ListOptionsButton;
