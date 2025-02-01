import { Context, ContextType, createContext, useContext } from "react";
import { TaskProps } from "./task";

export type ListProps = {
  id: string;
  title: string;
  createdAt: string;
  tasks: TaskProps[];
};

export type ListsProps = {
  isLoading: boolean;
  isLoadingCreate: boolean;
  isLoadingDelete: boolean;
  isLoadingUpdate: boolean;
  lists: ListProps[];

  fetchLists: () => Promise<void>;
  createList: (title: string) => Promise<ListProps | undefined>;
  deleteList: (id: string) => Promise<boolean>;
  updateList: (id: string, title: string) => Promise<boolean>;
};

export const ListsContext = createContext({} as ListsProps);

export const useListsContext = (): ContextType<Context<ListsProps>> => {
  return useContext(ListsContext);
};
