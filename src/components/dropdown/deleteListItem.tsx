import { useState } from "react";
import DeleteButton from "../button/deleteButton";
import DeleteModal from "../modal/deleteModal";
import { ListProps } from "../../context/list";

interface DeleteListItemProps {
  list: ListProps;
}

const DeleteListItem = ({ list }: DeleteListItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <DeleteButton listId={list.id} openModal={openModal} />
      <DeleteModal list={list} isOpen={isOpen} onRequestClose={closeModal} />
    </>
  );
};

export default DeleteListItem;
