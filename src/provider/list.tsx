import { ReactNode, useState } from "react";
import { ListsContext, ListProps } from "../context/list";
import { api } from "../services/api";
import { useSnackbarContext } from "../context/snakbar";

type ListsProviderProps = {
  children: ReactNode;
};

export const ListsProvider = ({
  children,
}: ListsProviderProps): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingCreate, setIsLoadingCreate] = useState(false);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  const [isLoadingUpdate, setIsLoadingUpdate] = useState(false);
  const [lists, setLists] = useState<ListProps[]>([]);
  const { notify } = useSnackbarContext();

  const fetchLists = async () => {
    setIsLoading(true);

    await api
      .get("/lists")
      .then((response) => {
        setLists(response.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const createList = async (title: string) => {
    setIsLoadingCreate(true);

    const list = await api
      .post("/lists", { title })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoadingCreate(false);
      });
    return list;
  };

  const deleteList = async (id: string) => {
    setIsLoadingDelete(true);

    await api
      .delete(`/lists/${id}`)
      .then(async () => {
        await fetchLists();
        notify("Lista deletada com sucesso", "success");
        return true;
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoadingDelete(false);
      });

    return false;
  };

  const updateList = async (id: string, title: string) => {
    setIsLoadingUpdate(true);

    await api
      .put(`/lists/${id}`, { title })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoadingUpdate(false);
      });

    return undefined;
  };

  return (
    <ListsContext.Provider
      value={{
        isLoading,
        isLoadingCreate,
        isLoadingDelete,
        isLoadingUpdate,
        lists,
        fetchLists,
        createList,
        deleteList,
        updateList,
      }}
    >
      {children}
    </ListsContext.Provider>
  );
};
