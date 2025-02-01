interface CloseTaskButtonProps {
  onClick: () => void;
}

const CloseTaskButton = ({ onClick }: CloseTaskButtonProps) => {
  return (
    <button
      onClick={() => onClick()}
      className="cursor-pointer hover:bg-liver active:bg-dark-charcoal rounded-[2px] p-1 w-8 h-8"
    >
      <img
        src="/src/assets/icons/BsArrowBarRight.svg"
        alt="ArrowBarRight"
        width={24}
        height={24}
      />
    </button>
  );
};

export default CloseTaskButton;
