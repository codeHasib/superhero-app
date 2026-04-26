"use client";

import { useHeroesData } from "@/context/dataContext";
import { motion } from "framer-motion";
import Image from "next/image";
import bannerImg from "../../public/banner.jpg";
import SwipeButton from "./ui/GetStartedBtn";
import Featured from "./Featured";

const Home = () => {
  const { heroes, loading } = useHeroesData();

  const poweredHeroes = heroes.filter((hero) => hero.powerstats.power > 95);

  const featuredHeroes = poweredHeroes.slice(0, 6);

  return (
    <div className="bg-black text-white overflow-y-hidden">
      {/* 1. HERO BANNER */}
      <section className="relative h-[60vh] flex items-center justify-center bg-yellow-400 overflow-hidden">
        {/* Decorative "Comic Burst" Background */}
        <motion.div
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1.2, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 bg-red-600 opacity-50"
        >
          <Image fill src={bannerImg} alt="Banner image"></Image>
        </motion.div>

        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-6xl md:text-9xl font-black text-black uppercase italic tracking-tighter"
          >
            Unleash <span className="text-red-600">Power</span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-black font-bold text-lg md:text-2xl mt-4 bg-white inline-block px-4 py-1"
          >
            Explore the Multiverse Database
          </motion.p>
        </div>
      </section>

      {/* 2. FEATURED HEROES (STRUCTURE) */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.h2
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          className="text-4xl font-bold border-l-8 border-yellow-400 pl-4 mb-12 uppercase"
        >
          Featured Legends
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredHeroes.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="bg-zinc-900 border-4 border-black shadow-[8px_8px_0px_0px_rgba(234,179,8,1)] p-4 h-96 flex flex-col justify-end relative overflow-hidden"
            >
              {/* This is where your fetched image will go */}
              <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 font-bold italic text-sm">
                LEVEL 99
              </div>
              <div className="h-2/3 bg-zinc-800 mb-4 animate-pulse rounded">
                <Image
                  // width={250}
                  // height={250}
                  fill
                  src={item.images.lg}
                  alt={item.name}
                ></Image>
              </div>
              <h3 className="text-2xl font-black text-yellow-400 uppercase">
                {item.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. REPEATING CALL TO ACTION (REGISTER) */}
      <Featured></Featured>

      {/* 4. ADDITIONAL CONTENT SECTION */}
      <section className="bg-red-600 py-20 text-black skew-y-1">
        <div className="max-w-4xl mx-auto text-center -skew-y-1">
          <h2 className="text-5xl font-black mb-6 uppercase">
            Join the Initiative
          </h2>
          <p className="text-xl font-bold mb-8">
            Create your own team of superheroes and track their stats in
            real-time.
          </p>
          <SwipeButton></SwipeButton>
        </div>
      </section>
    </div>
  );
};

// Stylish Reusable Button
const CTAButton = () => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="bg-yellow-400 text-black font-black text-2xl px-10 py-4 uppercase border-4 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all"
  >
    Get Started
  </motion.button>
);

export default Home;
