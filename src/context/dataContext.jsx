"use client";

import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext(undefined);

export const DataProvider = ({ children }) => {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loaddata = async () => {
      const res = await fetch(
        "https://akabab.github.io/superhero-api/api/all.json",
      );
      if (!res.ok) {
        setError("404 not found");
      }
      const data = await res.json();
      setHeroes(data);
      setLoading(false);
    };
    loaddata();
  }, []);

  return (
    <DataContext.Provider value={{ heroes, error, loading }}>
      {children}
    </DataContext.Provider>
  );
};

export const useHeroesData = () => {
  return useContext(DataContext);
};
