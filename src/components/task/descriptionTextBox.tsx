const DescriptionTextBox = () => {
  return (
    <input
      type="text"
      placeholder="Insira uma descrição"
      className="w-[472px] h-[232px] border border-liver rounded-sm p-2 gap-2.5"
      onChange={(e) => console.log(e.target.value)}
    />
  );
};

export default DescriptionTextBox;
