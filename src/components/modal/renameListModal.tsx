import { useState } from "react";
import Modal from "react-modal";
import { ListProps, useListsContext } from "../../context/list";

interface RenameListModalProps {
  list: ListProps;
  isOpen: boolean;
  onRequestClose: () => void;
}

const RenameListModal = ({
  list,
  isOpen,
  onRequestClose,
}: RenameListModalProps) => {
  const [newName, setNewName] = useState("");
  const { updateList } = useListsContext();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleRenameList(list.id);
    }
  };

  const handleRenameList = async (listId: string) => {
    const success = await updateList(listId, newName);

    if (success) {
      onRequestClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      overlayClassName="fixed inset-0 flex justify-center items-center"
      className="flex flex-col w-[445px] h-[45px] justify-center items-start bg-charleston-green border border-white rounded-xl p-2 gap-2.5"
    >
      <input
        type="text"
        placeholder="Novo nome"
        className="w-full h-full text-white"
        onChange={(e) => setNewName(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </Modal>
  );
};

export default RenameListModal;
