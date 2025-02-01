import { ReactNode, useState } from "react";
import {
  SnackbarProps,
  SnackbarType,
  SnackbarContext,
} from "../context/snakbar";

type SnackbarProviderProps = {
  children: ReactNode;
};

export const SnackbarProvider = ({
  children,
}: SnackbarProviderProps): JSX.Element => {
  const [snackbar, setSnackbar] = useState<SnackbarProps | null>(null);

  const notify = (message: string, type: SnackbarType) => {
    setSnackbar({ message, type });

    setTimeout(() => {
      setSnackbar(null);
    }, 2500);
  };

  return (
    <SnackbarContext.Provider value={{ notify }}>
      {children}
      {snackbar && (
        <div className="flex flex-row justify-between items-center fixed top-4 left-1/2 transform -translate-x-1/2 p-4 px-4 py-2 gap-6 rounded-xl text-white bg-charleston-green border border-white w-[336px] h-[50px]">
          <img
            src="/src/assets/icons/check-circle.svg"
            alt="check-circle"
            width={20}
            height={20}
          />
          <p className="text-islamic-green">{snackbar.message}</p>
          <img
            src="/src/assets/icons/BsXLg.svg"
            alt="BsXLg"
            width={16}
            height={16}
          />
        </div>
      )}
    </SnackbarContext.Provider>
  );
};
