"use client";

import TopHeroes from "@/components/TopHeroesCompo";
import { useHeroesData } from "@/context/dataContext";

const TopHeroesPage = () => {
  const { heroes } = useHeroesData();

  return (
    <div>
      <TopHeroes heroes={heroes}></TopHeroes>
    </div>
  );
};

export default TopHeroesPage;