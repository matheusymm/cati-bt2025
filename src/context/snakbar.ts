import { Context, ContextType, createContext, useContext } from "react";

export type SnackbarType = "success" | "error";

export type SnackbarProps = {
  message: string;
  type: SnackbarType;
};

export type SnackbarContextProps = {
  notify: (message: string, type: SnackbarType) => void;
};

export const SnackbarContext = createContext({} as SnackbarContextProps);

export const useSnackbarContext = (): ContextType<
  Context<SnackbarContextProps>
> => {
  return useContext(SnackbarContext);
};
