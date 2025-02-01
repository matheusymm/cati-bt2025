import { useState } from "react";
import { ListProps } from "../../context/list";
import RenameListButton from "../button/renameListButton";
import RenameListModal from "../modal/renameListModal";

interface RenameListItemProps {
  list: ListProps;
}

const RenameListItem = ({ list }: RenameListItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <RenameListButton openModal={openModal} />
      <RenameListModal
        list={list}
        isOpen={isOpen}
        onRequestClose={closeModal}
      />
    </>
  );
};

export default RenameListItem;
