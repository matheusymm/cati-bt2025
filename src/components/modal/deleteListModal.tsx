import Modal from "react-modal";
import { useListsContext } from "../../context/list";
import DeleteListButton from "../button/deleteListButton";

interface DeleteListModalProps {
  listId: string;
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement("#root");

const DeleteListModal = ({
  listId,
  isOpen,
  onRequestClose,
}: DeleteListModalProps) => {
  const { deleteList } = useListsContext();

  const handleDeleteList = async (listId: string) => {
    const success = await deleteList(listId);

    if (success) {
      onRequestClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="fixed inset-0 bg-charleston-green flex justify-center items-center"
      className="flex flex-col w-[413px] h-[200px] justify-center items-start border border-white rounded-xl px-4 py-3"
    >
      <div className="flex flex-col w-full h-full justify-center items-start gap-4">
        <div className="flex justify-end w-full h-6 items-center">
          <button className="cursor-pointer mt-6" onClick={onRequestClose}>
            <img
              src="/src/assets/icons/BsFillXCircleFill.svg"
              alt="BsFillXCircleFill"
              width={24}
              height={24}
            />
          </button>
        </div>
        <h6 className="text-white font-semibold text-xl">
          Tem certeza que deseja deleta a lista Nome?
        </h6>
        <p className="text-white text-base">Essa ação não é reversível.</p>
        <DeleteListButton listId={listId} deleteList={handleDeleteList} />
      </div>
    </Modal>
  );
};

export default DeleteListModal;
