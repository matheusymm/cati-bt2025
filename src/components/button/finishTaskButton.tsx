interface FinishTaskButtonProps {
  isFinished: boolean;
  finishTask: () => void;
}

const FinishTaskButton = ({
  isFinished,
  finishTask,
}: FinishTaskButtonProps) => {
  return (
    <div>
      {isFinished ? (
        <div className="flex flex-row items-center gap-2 p-4">
          <img
            src="/src/assets/icons/FinishTask.svg"
            alt="FinishTask"
            width={32}
            height={32}
          />
          <p className="text-crayola text-base">Finalizado</p>
        </div>
      ) : (
        <div
          onClick={finishTask}
          className="flex flex-row items-center gap-2 p-4 cursor-pointer"
        >
          <img
            src="/src/assets/icons/FinishTask.svg"
            alt="FinishTask"
            width={32}
            height={32}
          />
          <p className="text-white text-base hover:text-crayola">Finalizar</p>
        </div>
      )}
    </div>
  );
};

export default FinishTaskButton;
