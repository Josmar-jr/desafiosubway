import { useState } from "react";
import allFoods from "../api/foods";
import CardFood from "../components/CardFood";
import Layout from "../components/Layout";
import MenuFilter from "../components/MenuFilter";

import { Container } from "../styles/templates/Menu";

const removeRepeatCategory = Array.from(
  new Set(allFoods.map((food) => food.category))
);
const allCategories = ["Todos", ...removeRepeatCategory];

export default function Menu() {
  const [foods, setFoods] = useState(allFoods);
  const buttons = allCategories;

  const filter = (button: string) => {
    if (button === "Todos") {
      setFoods(allFoods);
      return;
    }

    const filteredData = allFoods.filter((food) => food.category === button);
    setFoods(filteredData);
  };

  return (
    <Layout>
      <Container>
        <div>
          <MenuFilter buttons={buttons} filter={filter} />
          <CardFood foods={foods} />
        </div>
      </Container>
    </Layout>
  );
}
