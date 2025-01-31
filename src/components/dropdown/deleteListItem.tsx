import { useState } from "react";
import DeleteListButton from "../button/deleteListButton";
import DeleteListModal from "../modal/deleteListModal";

interface DeleteListItemProps {
  listId: string;
}

const DeleteListItem = ({ listId }: DeleteListItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <DeleteListButton listId={listId} openModal={openModal} />
      <DeleteListModal
        listId={listId}
        isOpen={isOpen}
        onRequestClose={closeModal}
      />
    </>
  );
};

export default DeleteListItem;
