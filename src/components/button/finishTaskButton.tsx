const FinishTaskButton = () => {
  return (
    <button className="flex flex-row items-center gap-2 p-4 cursor-pointer">
      <img
        src="/src/assets/icons/FinishTask.svg"
        alt="FinishTask"
        width={32}
        height={32}
      />
      <p className="text-white text-base">Finalizar</p>
    </button>
  );
};

export default FinishTaskButton;
