import { Context, ContextType, createContext, useContext } from "react";

export type FileProps = {
  id: string;
  path: string;
  createdAt: string;
  taskId: string;
};

export type FilesProps = {
  isLoading: boolean;
  files: FileProps[];
};

export const FilesContext = createContext({} as FilesProps);

export const useFilesContext = (): ContextType<Context<FilesProps>> => {
  return useContext(FilesContext);
};
