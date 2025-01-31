import { useListsContext } from "../context/list";
import Header from "./header";
import ListPage from "./list/page";
import NewListButton from "./button/newListButton";
import { useEffect } from "react";

const Home = () => {
  const { createList, fetchLists, lists, isLoadingCreate } = useListsContext();

  const handleCreateList = async () => {
    const newList = await createList("A Fazer");

    if (newList) {
      await fetchLists();
    }
  };

  if (!lists) {
    return (
      <div className="flex flex-col w-full h-screen">
        <Header />
        <div className="flex flex-row bg-charleston-green px-20 pt-4 pb-8 gap-6 w-full h-full justify-start items-center overflow-x-auto ">
          <NewListButton handleCreateList={handleCreateList} isLoading />
        </div>
      </div>
    );
  }

  useEffect(() => {
    fetchLists();
  }, []);

  return (
    <div className="flex flex-col w-full h-screen">
      <Header />
      <div className="flex flex-row bg-charleston-green px-20 pt-4 pb-8 gap-6 w-full h-full justify-start items-center overflow-x-auto ">
        {lists.map((list) => (
          <ListPage key={list.id} listId={list.id} />
        ))}
        <NewListButton
          handleCreateList={handleCreateList}
          isLoading={isLoadingCreate}
        />
      </div>
    </div>
  );
};

export default Home;
