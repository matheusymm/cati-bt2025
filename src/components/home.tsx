import { useEffect, useState } from "react";
import { ListProps, useListsContext } from "../context/list";
import Header from "./header";
import Footer from "./footer";
import ListPage from "./list/page";
import NewListButton from "./button/newListButton";

const Home = () => {
  const { createList, fetchLists, lists, isLoadingCreate } = useListsContext();
  const [list, setList] = useState<ListProps | null>(null);

  const handleCreateList = async () => {
    const newList = await createList("Nova lista");

    if (newList) {
      setList(newList);
      await fetchLists();
    }
  };

  useEffect(() => {
    fetchLists();
  }, []);

  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="hidden md:block">
        <Header />
      </div>
      <div className="flex flex-row bg-charleston-green px-20 pt-4 pb-8 gap-6 w-full h-full justify-start items-center overflow-x-auto">
        {lists
          ? lists.map((list) => <ListPage key={list.id} list={list} />)
          : null}
        <div className="w-full h-full md:h-[750px] justify-start items-center">
          <NewListButton
            handleCreateList={handleCreateList}
            isLoading={isLoadingCreate}
          />
        </div>
      </div>
      <div className="block md:hidden">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
