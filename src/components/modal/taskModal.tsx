import Modal from "react-modal";

interface TaskModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const TaskModal = ({ isOpen, onRequestClose }: TaskModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="fixed inset-0 bg-charleston-green flex justify-center items-center"
      className="flex flex-col w-[608px]"
    >
      <div>
        <h1>Task Modal</h1>
      </div>
    </Modal>
  );
};

export default TaskModal;
