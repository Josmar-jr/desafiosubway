import { createContext, ReactNode, useEffect, useState } from "react";

type Food = {
  id: number;
  name: string;
  category: string;
  description: string;
};

type ListFoodsContextType = {
  allFoods: Array<Food>;
};

export const ListFoodsContext = createContext({} as ListFoodsContextType);

type ListFoodsProviderProps = {
  children: ReactNode;
};

export function ListFoodsProvider({ children }: ListFoodsProviderProps) {
  const [allFoods, setAllFoods] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("http://localhost:3333/allFoods");
      const data = await response.json();

      setAllFoods(data);
    }
    getData();
  }, []);

  return (
    <ListFoodsContext.Provider value={{ allFoods }}>
      {children}
    </ListFoodsContext.Provider>
  );
}
