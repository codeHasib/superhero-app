"use client";

import ExploreComponent from "@/components/ExploreComponent";
import { useHeroesData } from "@/context/dataContext";

const randomNum = Math.floor(Math.random() * 80) + 1;

const ExplorePage = () => {
  const { heroes } = useHeroesData();

  const selectedHeroes = heroes.splice(randomNum, 10);

  return (
    <div>
      <ExploreComponent fetchedHeroes={selectedHeroes}></ExploreComponent>
    </div>
  );
};

export default ExplorePage;
