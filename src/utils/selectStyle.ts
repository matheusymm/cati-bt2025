export const customStyles = {
  container: (provided: any) => ({
    ...provided,
    width: 250,
    height: "100%",
  }),
  control: (provided: any) => ({
    ...provided,
    minHeight: "36px",
    height: "36px",
    backgroundColor: "#252628",
    borderColor: "#4e4e4e",
    color: "#ffffff",
    boxShadow: "none",
    "&:hover": {
      borderColor: "#4e4e4e",
    },
    padding: 0,
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: "#ffffff",
    whiteSpace: "nowrap",
  }),
  menu: (provided: any) => ({
    ...provided,
    backgroundColor: "#252628",
    zIndex: 10,
    gap: 10,
  }),
  option: (provided: any, state: { isSelected: boolean }) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#4e4e4e" : "#252628",
    color: "#ffffff",
    whiteSpace: "nowrap",
    "&:hover": {
      backgroundColor: "#4e4e4e",
    },
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  dropdownIndicator: (provided: any) => ({
    ...provided,
    color: "#ffffff",
    "&:hover": {
      color: "#ffffff",
    },
  }),
};
