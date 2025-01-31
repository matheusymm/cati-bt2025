const FileButton = () => {
  return (
    <button className="flex flex-row cursor-pointer p-1 gap-1">
      <img src="/src/assets/icons/Clip.svg" alt="Clip" width={20} height={20} />
      <p className="text-white">3 arquivos</p>
      <img
        src="/src/assets/icons/Close.svg"
        alt="Close"
        width={16}
        height={16}
      />
    </button>
  );
};

export default FileButton;
